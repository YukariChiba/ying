// ==UserScript==
// @name         YingYingYing
// @namespace    https://github.com/SteveCharlesYang/ying
// @version      0.1.2
// @description  Replace Yings in Chinese
// @author       Charles Yang
// @updateURL    https://raw.githubusercontent.com/SteveCharlesYang/ying/master/ying.user.js
// @downloadURL  https://raw.githubusercontent.com/SteveCharlesYang/ying/master/ying.user.js
// @match        https://*/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle("ying::after { content: \"嘤\"; } ying:hover::after { content: attr(ori); } ");

(function(){
    'use strict';
    var yin = "陻音阴愔慇瘖磤禋欭殷氤洇姻喑噾因堙骃溵湮濦絪緸茵荫裀諲闉",
        yin_2 = "霪银夤訚狺峾崟寅婬犾唫嚚圻垠冘吟龈龂淫蟫訔誾鄞",
        yin_4 = "隐窨慭懚梀廕印胤酳",
        ying = "韺瑛锳璎撄孾柍樱嫈媖婴啨应鹦鹰瀴缨罂膺莺英荥蘡蠳譍譻賏",
        ying_2 = "盈禜籯桯楹浧嬴莹滢潆濙濚瀛瀯茔荧萤萦营蝇謍赢迎",
        ying_4 = "硬映媵",
        ying_reg = RegExp("(?<=(^|>)[^<]*)[" + ying + ying_2 + ying_4 + "](?=[^>]*)","g"),
        yin_reg = RegExp("(?<=(^|>)[^<]*)[" + yin + yin_2 + yin_4 + "](?=[^>]*)","g");

    onload = function()
    {
        var eles = document.body.innerHTML;
        eles = eles.replace(ying_reg, "<ying ori=\"$&\" class=\"ying\"></ying>");
        eles = eles.replace(yin_reg, "<ying ori=\"$&\" class=\"ying\"></ying>");
        document.body.innerHTML = eles;
    }
}());