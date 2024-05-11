import { printWranglerBanner } from "..";
import { fetchGraphqlResult } from "../cfetch";
import { withConfig } from "../config";
import { logger } from "../logger";
import { requireAuth } from "../user";
import { getDatabaseByNameOrBinding, getDatabaseInfoFromId } from "./utils";
import type {
	CommonYargsArgv,
	StrictYargsOptionsToInterface,
} from "../yargs-types";
import type { D1QueriesGraphQLResponse, Database } from "./types";

export function Options(d1ListYargs: CommonYargsArgv) {
	return d1ListYargs
		.positional("name", {
			describe: "The name of the DB",
			type: "string",
			demandOption: true,
		})
		.option("timePeriod", {
			choices: ["1d", "7d", "31d"] as const,
			describe: "Fetch data from now to the provided time period",
			default: "1d" as const,
		})
		.option("sort-type", {
			choices: ["sum", "avg"] as const,
			describe: "Choose the operation you want to sort insights by",
			default: "sum" as const,
		})
		.option("sort-by", {
			choices: ["time", "reads", "writes", "count"] as const,
			describe: "Choose the field you want to sort insights by",
			default: "time" as const,
		})
		.option("sort-direction", {
			choices: ["ASC", "DESC"] as const,
			describe: "Choose a sort direction",
			default: "DESC" as const,
		})
		.option("count", {
			describe: "fetch insights about the first X queries",
			type: "number",
			default: 5,
		})
		.option("json", {
			describe: "return output as clean JSON",
			type: "boolean",
			default: false,
		});
}

const cliOptionToGraphQLOption = {
	time: "queryDurationMs",
	reads: "rowsRead",
	writes: "rowsWritten",
	count: "count",
};

type HandlerOptions = StrictYargsOptionsToInterface<typeof Options>;
export const Handler = withConfig<HandlerOptions>(
	async ({
		name,
		config,
		json,
		count,
		timePeriod,
		sortType,
		sortBy,
		sortDirection,
	}): Promise<void> => {
		const accountId = await requireAuth(config);
		const db: Database = await getDatabaseByNameOrBinding(
			config,
			accountId,
			name
		);

		const result = await getDatabaseInfoFromId(accountId, db.uuid);

		const output: Record<string, string | number>[] = [];

		if (result.version !== "alpha") {
			const convertedTimePeriod = Number(timePeriod.replace("d", ""));
			const endDate = new Date();
			const startDate = new Date(
				new Date(endDate).setDate(endDate.getDate() - convertedTimePeriod)
			);
			const parsedSortBy = cliOptionToGraphQLOption[sortBy];
			const orderByClause =
				parsedSortBy === "count"
					? `${parsedSortBy}_${sortDirection}`
					: `${sortType}_${parsedSortBy}_${sortDirection}`;
			const graphqlQueriesResult =
				await fetchGraphqlResult<D1QueriesGraphQLResponse>({
					method: "POST",
					body: JSON.stringify({
						query: `query getD1QueriesOverviewQuery($accountTag: string, $filter: ZoneWorkersRequestsFilter_InputObject) {
								viewer {
									accounts(filter: {accountTag: $accountTag}) {
										d1QueriesAdaptiveGroups(limit: ${count}, filter: $filter, orderBy: [${orderByClause}]) {
											sum {
												queryDurationMs
												rowsRead
												rowsWritten
											}
											avg {
												queryDurationMs
												rowsRead
												rowsWritten
											}
											count
											dimensions {
													query
											}
										}
									}
								}
							}`,
						operationName: "getD1QueriesOverviewQuery",
						variables: {
							accountTag: accountId,
							filter: {
								AND: [
									{
										datetimeHour_geq: startDate.toISOString(),
										datetimeHour_leq: endDate.toISOString(),
										databaseId: db.uuid,
									},
								],
							},
						},
					}),
					headers: {
						"Content-Type": "application/json",
					},
				});

			graphqlQueriesResult?.data?.viewer?.accounts[0]?.d1QueriesAdaptiveGroups?.forEach(
				(row) => {
					if (!row.dimensions.query) return;
					output.push({
						query: row.dimensions.query,
						avgRowsRead: row?.avg?.rowsRead ?? 0,
						totalRowsRead: row?.sum?.rowsRead ?? 0,
						avgRowsWritten: row?.avg?.rowsWritten ?? 0,
						totalRowsWritten: row?.sum?.rowsWritten ?? 0,
						avgDurationMs: row?.avg?.queryDurationMs ?? 0,
						totalDurationMs: row?.sum?.queryDurationMs ?? 0,
						numberOfTimesRun: row?.count ?? 0,
					});
				}
			);
		}

		if (json) {
			logger.log(JSON.stringify(output, null, 2));
		} else {
			await printWranglerBanner();
			logger.log(
				"-------------------\n🚧 `wrangler d1 insights` is an experimental command.\n🚧 Flags for this command, their descriptions, and output may change between wrangler versions.\n-------------------\n"
			);
			logger.log(JSON.stringify(output, null, 2));
		}
	}
);
