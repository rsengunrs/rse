// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.network-timing-table {
  width: 380px;
  border-spacing: 0;
  padding-left: 10px;
  padding-right: 10px;
  line-height: initial;
  table-layout: fixed;
}

.network-timing-start {
  border-top: 5px solid transparent;
}

.network-timing-start th span.network-timing-hidden-header {
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
}

.network-timing-table-header td,
.network-timing-footer td {
  border-top: 10px solid transparent;
}

.network-timing-table-header td {
  color: var(--color-text-secondary);
}

.network-timing-table td {
  padding: 4px 0;
}

.network-timing-table-header td:last-child {
  text-align: right;
}

.network-timing-footer td:last-child {
  font-weight: bold;
  text-align: right;
}

table.network-timing-table > tr:not(.network-timing-table-header):not(.network-timing-footer) > td:first-child {
  padding-left: 12px;
}

.network-timing-table col.labels {
  width: 156px;
}

.network-timing-table col.duration {
  width: 80px;
}

.network-timing-table td.caution {
  font-weight: bold;
  color: var(--issue-color-yellow);
  padding: 2px 0;
}

.network-timing-table hr.break {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, var(--color-background-elevation-0), var(--color-text-secondary), var(--color-background-elevation-0));
}

.network-timing-row {
  position: relative;
  height: 15px;
}

.network-timing-bar {
  position: absolute;
  min-width: 1px;
  top: 0;
  bottom: 0;
}

.network-timing-bar-title {
  color: var(--color-text-primary);
  white-space: nowrap;
  text-align: right;
}

.network-timing-bar.queueing,
.network-timing-bar.total {
  border: 1px solid var(--color-text-secondary);
}

.network-timing-bar.blocking,
.-theme-preserve {
  background-color: var(--override-network-overview-blocking);
}

.network-timing-bar.proxy,
.-theme-preserve {
  background-color: var(--override-network-overview-proxy);
}

.network-timing-bar.dns,
.-theme-preserve {
  background-color: var(--override-network-overview-dns);
}

.network-timing-bar.connecting,
.network-timing-bar.serviceworker,
.network-timing-bar.serviceworker-preparation,
.-theme-preserve {
  background-color: var(--override-network-overview-service-worker);
}

.network-timing-bar.ssl,
.-theme-preserve {
  background-color: var(--override-network-overview-ssl);
}

.network-timing-bar.serviceworker-respondwith,
.-theme-preserve {
  background-color: var(--override-network-overview-service-worker-respond-with);
}

.network-fetch-timing-bar-clickable::before {
  user-select: none;
  -webkit-mask-image: var(--image-file-treeoutlineTriangles);
  -webkit-mask-position: 0 0;
  -webkit-mask-size: 32px 24px;
  float: left;
  width: 8px;
  height: 12px;
  margin-right: 2px;
  content: "";
  position: relative;
  top: 3px;
  background-color: var(--color-text-secondary);
}

.network-fetch-timing-bar-clickable {
  position: relative;
  left: -12px;
}

.network-fetch-timing-bar-clickable:focus-visible {
  background-color: var(--color-background-elevation-1);
}

.network-fetch-timing-bar-clickable[aria-checked="true"]::before {
  -webkit-mask-position: -16px 0;
}

.network-fetch-timing-bar-details-collapsed {
  display: none;
}

.network-fetch-timing-bar-details-expanded {
  display: block;
}

.network-fetch-timing-bar-details {
  padding-left: 11px;
  width: fit-content;
}

.network-fetch-details-treeitem {
  width: max-content;
}

.network-timing-bar.sending,
.-theme-preserve {
  background-color: var(--override-network-overview-sending);
}

.network-timing-bar.waiting,
.-theme-preserve {
  background-color: var(--override-network-overview-waiting);
}

.network-timing-bar.receiving,
.network-timing-bar.receiving-push,
.-theme-preserve {
  background-color: var(--override-network-overview-receiving);
}

.network-timing-bar.push,
.-theme-preserve {
  background-color: var(--override-network-overview-push);
}

.server-timing-row:nth-child(even) {
  background: var(--color-background-elevation-0);
}

.network-timing-bar.server-timing,
.-theme-preserve {
  background-color: var(--color-background-elevation-2);
}

.network-timing-table td.network-timing-metric {
  white-space: nowrap;
  max-width: 150px;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.network-timing-bar.proxy,
.network-timing-bar.dns,
.network-timing-bar.ssl,
.network-timing-bar.connecting,
.network-timing-bar.blocking {
  height: 10px;
  margin: auto;
}

@media (forced-colors: active) {
  .network-timing-bar.blocking,
  .network-timing-bar.proxy,
  .network-timing-bar.dns,
  .network-timing-bar.connecting,
  .network-timing-bar.serviceworker,
  .network-timing-bar.serviceworker-preparation,
  .network-timing-bar.ssl,
  .network-timing-bar.sending,
  .network-timing-bar.waiting,
  .network-timing-bar.receiving,
  .network-timing-bar.receiving-push,
  .network-timing-bar.push,
  .network-timing-bar.server-timing,
  .-theme-preserve {
    forced-color-adjust: none;
  }

  .network-timing-table-header td,
  .network-timing-footer td {
    forced-color-adjust: none;
    color: ButtonText;
  }
}

/*# sourceURL=networkTimingTable.css */
`);
export default styles;
