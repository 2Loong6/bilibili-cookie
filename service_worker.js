// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.cookies.onChanged.addListener(function(info) {
  let name = info.cookie.name;
  if (name.indexOf('buvid') !== -1) {
    console.log(info)
    chrome.cookies.remove({url: 'https://www.bilibili.com/',name: name})
  }
});
