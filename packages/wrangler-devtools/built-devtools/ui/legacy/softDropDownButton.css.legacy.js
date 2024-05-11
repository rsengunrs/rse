// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
export default {
  cssContent: `/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

button.soft-dropdown {
  height: 26px;
  text-align: left;
  position: relative;
  border: none;
  background: none;
}

button.soft-dropdown[disabled] {
  opacity: 50%;
}

button.soft-dropdown > .title {
  padding-right: 5px;
  flex: 0 1 120px;
  overflow: hidden;
  text-overflow: ellipsis;
}

button.soft-dropdown:hover:not(:active) > .title {
  color: var(--color-text-primary);
}

@media (forced-colors: active) {
  button.soft-dropdown {
    border: 1px solid ButtonText;
    background: ButtonFace;
    color: ButtonText;
  }

  button.soft-dropdown[disabled] {
    opacity: 100%;
  }

  button.soft-dropdown:disabled > .smallicon-triangle-down {
    background-color: GrayText;
  }
}
`
};
