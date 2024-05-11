// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.filtered-list-widget {
  display: flex;
  flex-direction: column;
  flex: auto;
  border: 1px solid transparent;

  --override-filtered-list-widget-highlight-text-background-color: rgb(255 255 255 / 25%);
}

.-theme-with-dark-background .filtered-list-widget,
:host-context(.-theme-with-dark-background) .filtered-list-widget {
  --override-filtered-list-widget-highlight-text-background-color: rgb(255 255 255 / 75%);
}

.filtered-list-widget-prompt-element {
  flex: 0 0 34px;
  border: 0;
  margin: 0;
  padding: 0 6px;
  z-index: 1;
  font-size: inherit;
}

devtools-text-prompt {
  flex: 0 0 40px;
  font-size: 14px;
  font-family: ".SFNSDisplay-Regular", "Helvetica Neue", "Lucida Grande", sans-serif;
  line-height: 16px;
  padding: 12px;
}

.filtered-list-widget-hint {
  width: 100%;
  flex: 0 0 30px;
  font-size: 12px;
  line-height: 30px;
  padding: 0 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text-secondary);
  background: var(--color-background-elevation-1);
  border-top: 1px solid var(--color-details-hairline);
}

.filtered-list-widget-progress {
  flex: none;
  background: rgb(0 0 0 / 20%); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
  height: 1px;
}

.filtered-list-widget-progress-bar {
  background-color: var(--color-primary-variant);
  height: 2px;
  width: 100%;
  transform: scaleX(0);
  transform-origin: top left;
  opacity: 100%;
  transition: none;
}

.filtered-widget-progress-fade {
  opacity: 0%;
  transition: opacity 500ms;
}

.filtered-list-widget .vbox > div.container {
  flex: auto;
  overflow-x: hidden;
  overflow-y: auto;
}

.filtered-list-widget-item-wrapper {
  color: var(--color-text-primary);
  display: flex;
  border-bottom: 1px solid var(--color-details-hairline-light);
  font-family: ".SFNSDisplay-Regular", "Helvetica Neue", "Lucida Grande", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
}

.filtered-list-widget-item-wrapper devtools-icon {
  align-self: center;
  flex: none;
  padding-right: 8px;
}

.filtered-list-widget-item-wrapper.selected {
  background-color: var(--color-primary);
}

.filtered-list-widget-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
  font-size: 12px;
  flex: auto;
}

.filtered-list-widget-item.two-rows span.highlight {
  color: var(--color-primary);
}

.filtered-list-widget-item.one-row span.highlight {
  font-weight: bold;
}

.filtered-list-widget-item .filtered-list-widget-title {
  flex: initial;
  overflow: hidden;
  text-overflow: ellipsis;
}

.filtered-list-widget-item .filtered-list-widget-subtitle {
  flex: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text-secondary);
  display: flex;
  white-space: pre;
}

.filtered-list-widget-item .filtered-list-widget-subtitle .first-part {
  flex-shrink: 1000;
  overflow: hidden;
  text-overflow: ellipsis;
}

.filtered-list-widget-item-wrapper .tag {
  padding: 0 12px;
  border-radius: 4px;
  line-height: 24px;
  height: 24px;
  align-self: center;
  flex-shrink: 0;
}

.filtered-list-widget-item-wrapper.selected .filtered-list-widget-item span.highlight {
  color: var(--color-background);
  background-color: var(--override-filtered-list-widget-highlight-text-background-color);
}

.filtered-list-widget-item-wrapper.selected .filtered-list-widget-title,
.filtered-list-widget-item-wrapper.selected .filtered-list-widget-subtitle,
.filtered-list-widget-item-wrapper.selected .tag {
  color: var(--color-background);
}

.filtered-list-widget-item-wrapper devtools-icon.ic_file_document {
  --icon-color: var(--color-ic-file-document);
}

.filtered-list-widget-item-wrapper devtools-icon.ic_file_image {
  --icon-color: var(--color-ic-file-image);
}

.filtered-list-widget-item-wrapper devtools-icon.ic_file_font {
  --icon-color: var(--color-ic-file-font);
}

.filtered-list-widget-item-wrapper devtools-icon.ic_file_script {
  --icon-color: var(--color-ic-file-script);
}

.filtered-list-widget-item-wrapper devtools-icon.ic_file_stylesheet {
  --icon-color: var(--color-ic-file-stylesheet);
}

.filtered-list-widget-item-wrapper devtools-icon.ic_file_webbundle {
  --icon-color: var(--color-ic-file-webbundle);
}

.filtered-list-widget-item-wrapper devtools-icon.ic_file_default {
  --icon-color: var(--color-ic-file-default);
}

.filtered-list-widget-item-wrapper.selected devtools-icon {
  --icon-color: var(--color-background);
}

.filtered-list-widget-item.one-row {
  height: 36px;
  line-height: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
}

.filtered-list-widget-item.one-row .filtered-list-widget-title {
  padding-right: 8px;
}

.filtered-list-widget-item.two-rows {
  height: 45px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.filtered-list-widget-item.two-rows .filtered-list-widget-title {
  font-weight: bold;
}

.not-found-text {
  height: 34px;
  line-height: 34px;
  padding-left: 8px;
  font-style: italic;
  color: var(--color-text-disabled);
  background: var(--color-background-elevation-0);
}

.quickpick-description {
  flex: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text-disabled);
  padding-left: 15px;
}

@media (forced-colors: active) {
  .filtered-list-widget {
    forced-color-adjust: none;
    border-color: ButtonText;
  }

  .filtered-list-widget-item-wrapper .filtered-list-widget-title,
  .filtered-list-widget-item-wrapper .filtered-list-widget-subtitle,
  .quickpick-description {
    color: ButtonText;
  }

  .filtered-list-widget-item-wrapper.selected {
    background-color: Highlight;
  }

  .filtered-list-widget-item-wrapper.selected .filtered-list-widget-item .filtered-list-widget-title,
  .filtered-list-widget-item-wrapper.selected .filtered-list-widget-item .filtered-list-widget-subtitle {
    color: HighlightText;
  }

  devtools-text-prompt {
    border-color: ButtonText;
  }
}

/*# sourceURL=filteredListWidget.css */
`);
export default styles;
