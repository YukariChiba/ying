(function(){
    'use strict';
    var yin = "[陻音阴愔慇瘖磤禋欭殷氤洇姻喑噾因堙骃溵湮濦絪緸茵荫裀諲闉]",
        ying = "[韺瑛锳璎撄孾柍樱嫈媖婴啨应鹦鹰瀴缨罂膺莺英荥蘡蠳譍譻賏]",
        ying_reg = RegExp(ying,"g"),
        yin_reg = RegExp(yin,"g");
    
    onload = function()
    {
        var eles = document.body.innerHTML;
        eles = eles.replace(ying_reg, "<ying ori=\"$&\"></ying>");
        eles = eles.replace(yin_reg, "<ying ori=\"$&\"></ying>");
        document.write(eles);
    }
}());



