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

.lighthouse-view {
  --view-horizontal-margin: 20px;

  margin: 7px var(--view-horizontal-margin);
  flex: auto;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.lighthouse-view h2 {
  color: var(--color-text-primary);
  font-weight: bold;
  font-size: 14px;
  flex: none;
  width: 100%;
  text-align: left;
}

.lighthouse-view button {
  z-index: 10;
  margin-left: auto;
  margin-right: 0;
}

.lighthouse-status {
  width: 100%;
  flex: auto;
  align-items: center;
  color: var(--color-text-primary);
}

.lighthouse-status-text {
  text-align: center;
  min-height: 50px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
}

.lighthouse-status-text code {
  user-select: text;
  text-align: left;
  white-space: pre-wrap;
  overflow: auto;
}

.lighthouse-progress-wrapper {
  width: calc(100% + 2 * var(--view-horizontal-margin));
  height: 2px;
  background-color: var(--color-background-highlight);
  position: relative;
  margin: 10px;
}

.lighthouse-progress-bar {
  width: 0%;
  height: 100%;
  background: var(--color-primary-variant);
  position: absolute;
  transform-origin: left;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;

  --progress-bar-loading-duration: 45s;
  --progress-bar-gathering-duration: 12s;
  --progress-bar-gathering-percent: 70%;
  --progress-bar-auditing-duration: 5s;
  --progress-bar-auditing-percent: 95%;
}

.lighthouse-progress-bar.errored {
  width: 100%;
  background: #e50303; /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.lighthouse-progress-bar.loading {
  animation-duration: var(--progress-bar-loading-duration);
  animation-name: progressBarLoading;
}

@keyframes progressBarLoading {
  0% { width: 0%; }
  100% { width: var(--progress-bar-gathering-percent); }
}

.lighthouse-progress-bar.gathering {
  animation-duration: var(--progress-bar-gathering-duration);
  animation-name: progressBarGathering;
}

@keyframes progressBarGathering {
  0% { width: var(--progress-bar-gathering-percent); }
  100% { width: var(--progress-bar-auditing-percent); }
}

.lighthouse-progress-bar.auditing {
  animation-duration: var(--progress-bar-auditing-duration);
  animation-name: progressBarAuditing;
}

@keyframes progressBarAuditing {
  0% { width: var(--progress-bar-auditing-percent); }
  100% { width: 99%; }
}

.lighthouse-report-error {
  display: block;
  margin-top: 5px;
}

.lighthouse-action-buttons {
  align-self: end;
  column-gap: 8px;
}

/*# sourceURL=lighthouseDialog.css */
`);
export default styles;
