// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
/* <3 */

.lighthouse-start-view,
.lighthouse-start-view-fr {
  font-family: Roboto, sans-serif;
  font-size: var(--font-size);
  line-height: 18px;
  /* for buttons */
  --legacy-accent-color: #0535c1;
  --legacy-accent-color-hover: #17b;
  --font-size: 14px;
  --report-font-family: roboto, helvetica, arial, sans-serif;
}

.lighthouse-start-view-fr {
  padding: 24px;
  overflow: auto;
  height: 100%;
}

.lighthouse-start-view header {
  flex: 2 1;
  padding: 16px;
  display: grid;
  justify-items: center;
}

.lighthouse-start-view-fr header {
  display: flex;
  font-size: 18px;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  margin-bottom: 16px;
}

.lighthouse-logo {
  width: 75px;
  height: 75px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: var(--image-file-lighthouse_logo);
}

.lighthouse-start-view-fr .lighthouse-logo {
  width: 45px;
  height: 45px;
}

.lighthouse-start-view-text {
  margin: 0 40px;
  text-align: center;
}

.lighthouse-start-view form {
  display: contents;
}

.lighthouse-form-section {
  padding: 8px;
  flex: 1 1;
}

.lighthouse-start-view.vbox .lighthouse-form-categories {
  border-top: 1px solid var(--color-background-elevation-2);
  border-bottom: 1px solid var(--color-background-elevation-2);
}

.lighthouse-form-section-label {
  margin: 7px 0;
  font-weight: 500;
}

.lighthouse-form-section-label i span {
  position: relative;
  top: -2px;
}

.lighthouse-form-section-label span.largeicon-checkmark {
  top: -4px;
}

.lighthouse-form-section-label .lighthouse-learn-more {
  padding: 20px;
}

.lighthouse-radio {
  display: flex;
  align-items: center;
}

input[type="radio"]:focus {
  outline-width: 2px;
}

:host-context(.-theme-with-dark-background) input[type="radio"] {
  accent-color: var(--color-checkbox-accent-color);
}

.lighthouse-radio-text {
  margin-left: 3px;
}

.lighthouse-start-button-container {
  align-items: center;
}

.lighthouse-start-view-fr header.hbox .lighthouse-start-button-container {
  margin-left: auto;
}

.lighthouse-start-view-fr header.vbox .lighthouse-title {
  text-align: center;
}

.lighthouse-start-button-container button {
  margin: 16px auto;
  font-family: var(--report-font-family);
  font-weight: 500;
  font-size: var(--font-size);
}

.lighthouse-start-button-container button:disabled {
  cursor: not-allowed;
}

.lighthouse-start-view .toolbar-dropdown-arrow {
  display: none;
}

.lighthouse-launcher-row,
.lighthouse-radio {
  margin-bottom: 6px;
}

.lighthouse-launcher-row:last-of-type,
.lighthouse-radio:last-of-type {
  margin-bottom: 0;
}

.lighthouse-launcher-row .dimmed {
  padding-left: 22px;
}

.lighthouse-help-text {
  text-align: center;
  color: #f00; /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
  font-weight: bold;
  padding-left: 10px;
}

.lighthouse-warning-text {
  text-align: left;
  color: #ff8c00; /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
  font-weight: bold;
  padding-left: 10px;
  padding-top: 10px;
}

.lighthouse-warning-text::before {
  content: "⚠";
  margin-right: 10px;
}

.lighthouse-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
}

.lighthouse-options.narrow {
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
}

.lighthouse-options.wide {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}

/*# sourceURL=lighthouseStartView.css */
`);
export default styles;
