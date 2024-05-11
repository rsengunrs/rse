import down from './down.js';
import up from './up.js';

export default {
	/**
	 * @param {Request} req
	 * @returns {Promise<Response>}
	 */
	async fetch(req) {
		let url = new URL(req.url);
		let path = url.pathname.replace(/[/]$/, '');

		switch (path) {
			case '/down': {
				return down(req);
			}
			case '/up': {
				return up(req);
			}
			default: {
				return new Response('Not found', { status: 404 });
			}
		}
	},
};
