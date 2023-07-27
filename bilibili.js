// ==UserScript==
// @name         哔哩哔哩旧版首页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  B站前端你_什么时候_啊？因为很多小伙伴被B站恶心人的新版首页困扰，但是每次修改cookie又特别麻烦，所以我写了一个油猴脚本，可以一劳永逸的解决强制新版首页的问题。
// @author       杰西卡到底骚不骚啊
// @match        https://*.bilibili.com/*
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    // Function to "delete" a cookie
    function deleteCookie(name, domain) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + domain;
    }

    // Function to set a cookie
    function setCookie(name, value, expires, domain) {
        var cookie = name + "=" + value + ";expires=" + expires + ";path=/;domain=" + domain;
        document.cookie = cookie;
    }

    // Delete the old cookies
    deleteCookie("i-wanna-go-back", ".bilibili.com");
    deleteCookie("i-wanna-go-feeds", ".bilibili.com");
    deleteCookie("go_old_video", ".bilibili.com");
    deleteCookie("nostalgia_conf", ".bilibili.com");
    deleteCookie("buvid3", ".bilibili.com");
    deleteCookie("buvid4", ".bilibili.com");

    // Set the new cookies
    setCookie("i-wanna-go-back", "2", "Thu, 22 May 2094 08:02:31 GMT", ".bilibili.com");
    setCookie("i-wanna-go-feeds", "1", "Thu, 22 May 2094 08:02:31 GMT", ".bilibili.com");
    setCookie("go_old_video", "1", "Thu, 22 May 2094 08:02:31 GMT", ".bilibili.com");
    setCookie("nostalgia_conf", "2", "Thu, 22 May 2094 08:02:31 GMT", ".bilibili.com");
    setCookie("go-back-dyn", "1", "Thu, 22 May 2094 08:02:31 GMT", ".bilibili.com");
})();