// ==UserScript==
// @name        web loader
// @namespace    http://your.homepage/
// @version      1.0
// @description  For the fucking website
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @author       fungyuen
// @match        http://f9c9eb26.nat2.s100.vip/*
// @match        http://lhzqls.viphk.ngrok.org/*
// @include      http://f9c9eb26.nat2.s100.vip/*
// @include      http://lhzqls.viphk.ngrok.org/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    var get365KellyName, get365FirstKelly3, get365FirstKelly1, get365FirstKelly0, get365LastKelly3, get365LastKelly1, get365LastKelly0
    var getChinaKellyName, getChinaFirstKelly3, getChinaFirstKelly1, getChinaFirstKelly0, getChinaLastKelly3, getChinaLastKelly1, getChinaLastKelly0
    var getWinsonKellyName, getWinsonFirstKelly3, getWinsonFirstKelly1, getWinsonFirstKelly0, getWinsonLastKelly3, getWinsonLastKelly1, getWinsonLastKelly0
    var getCrownKellyName, getCrownFirstKelly3, getCrownFirstKelly1, getCrownFirstKelly0, getCrownLastKelly3, getCrownLastKelly1, getCrownLastKelly0
    var getMacaoKellyName, getMacaoFirstKelly3, getMacaoFirstKelly1, getMacaoFirstKelly0, getMacaoLastKelly3, getMacaoLastKelly1, getMacaoLastKelly0
    var getHKJCKellyName, getHKJCFirstKelly3, getHKJCFirstKelly1, getHKJCFirstKelly0, getHKJCLastKelly3, getHKJCLastKelly1, getHKJCLastKelly0
    var isLogout = document.evaluate('//*[@id="jichu"]/table/tbody/tr[1]/th[2]',document).iterateNext().textContent
    document.getElementById("oupeikaili").innerHTML+= "<strong style='color:green'>建議插件已啟動 如有提示會在下方顯示</strong><br>"
    if (isLogout == "被逼下线"){
        document.getElementById("bisaixinxi").innerHTML+= "<strong>重新登入系統</strong>"
    }else{
    for (var i = 1; i < 8; i++) {
        if (
		document.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document).iterateNext()
			.textContent == '365(英国)'
	) {
		get365KellyName = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document)
			.iterateNext().textContent
		get365FirstKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[2]', document)
			.iterateNext().textContent
		get365FirstKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[3]', document)
			.iterateNext().textContent
		get365FirstKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[4]', document)
			.iterateNext().textContent
		get365LastKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[5]', document)
			.iterateNext().textContent
		get365LastKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[6]', document)
			.iterateNext().textContent
		get365LastKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[7]', document)
			.iterateNext().textContent
	}
       	if (
		document.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document).iterateNext()
			.textContent == '竞彩官方'
	) {
		getChinaKellyName = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document)
			.iterateNext().textContent
        getChinaFirstKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[2]', document)
			.iterateNext().textContent
		getChinaFirstKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[3] ', document)
			.iterateNext().textContent
		getChinaFirstKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[4]', document)
			.iterateNext().textContent
		getChinaLastKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[5]', document)
			.iterateNext().textContent
		getChinaLastKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[6]', document)
			.iterateNext().textContent
		getChinaLastKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[7]', document)
			.iterateNext().textContent
	}
	if (
		document.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document).iterateNext()
			.textContent == '威廉希尔(英国)'
	) {

		getWinsonKellyName = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document)
			.iterateNext().textContent
		getWinsonFirstKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[2]', document)
			.iterateNext().textContent
		getWinsonFirstKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[3]', document)
			.iterateNext().textContent
		getWinsonFirstKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[4]', document)
			.iterateNext().textContent
		getWinsonLastKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[5]', document)
			.iterateNext().textContent
		getWinsonLastKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[6]', document)
			.iterateNext().textContent
		getWinsonLastKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[7]', document)
			.iterateNext().textContent
	}
	if (
		document.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document).iterateNext()
			.textContent == 'Crown'
	) {
		getCrownKellyName = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document)
			.iterateNext().textContent
		getCrownFirstKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[2]', document)
			.iterateNext().textContent
		getCrownFirstKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[3]', document)
			.iterateNext().textContent
		getCrownFirstKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[4]', document)
			.iterateNext().textContent
		getCrownLastKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[5]', document)
			.iterateNext().textContent
		getCrownLastKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[6]', document)
			.iterateNext().textContent
		getCrownLastKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[7]', document)
			.iterateNext().textContent
	}
	if (
		document.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document).iterateNext()
			.textContent == '澳门'
	) {
		getMacaoKellyName = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document)
			.iterateNext().textContent
		getMacaoFirstKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[2]', document)
			.iterateNext().textContent
		getMacaoFirstKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[3]', document)
			.iterateNext().textContent
		getMacaoFirstKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[4]', document)
			.iterateNext().textContent
		getMacaoLastKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[5]', document)
			.iterateNext().textContent
		getMacaoLastKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[6]', document)
			.iterateNext().textContent
		getMacaoLastKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[7]', document)
			.iterateNext().textContent
	}
	if (
		document.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document).iterateNext()
			.textContent == '香港马会(中国香港)'
	) {
		getHKJCKellyName = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[1]', document)
			.iterateNext().textContent
		getHKJCFirstKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[2]', document)
			.iterateNext().textContent
		getHKJCFirstKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[3]', document)
			.iterateNext().textContent
		getHKJCFirstKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[4]', document)
			.iterateNext().textContent
		getHKJCLastKelly3 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[5]', document)
			.iterateNext().textContent
		getHKJCLastKelly1 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[6]', document)
			.iterateNext().textContent
		getHKJCLastKelly0 = document
			.evaluate('//*[@id="oupeikaili"]/table/tbody/tr[' + i + ']/td[7]', document)
			.iterateNext().textContent
	}
    }
        //競彩負 皇冠正 = 多數上盤打不出 買下盤 **
        //競彩正 皇冠負 = 買上盤

        //確保競彩負
        if ((typeof getChinaKellyName != 'undefined') & (typeof getCrownKellyName != 'undefined')) {
            if ((parseInt(getChinaLastKelly0) < parseInt(getChinaLastKelly3)) & (parseInt(getChinaLastKelly0) < parseInt(getChinaLastKelly1))) {
                //確保皇冠正
                if (
                    (parseInt(getCrownLastKelly3) < parseInt(getCrownLastKelly0)) &
                    (parseInt(getCrownLastKelly3) < parseInt(getCrownLastKelly1))
                ) {
                    document.getElementById("oupeikaili").innerHTML+= "<strong style='background: blue; color:white>尾盤答案:競彩負 皇冠正 = 買客隊LEVEL1</strong><br>"
                    //console.log('競彩負 皇冠正 = 多數上盤打不出 買下盤 **')
                }
            }

            //確保競彩正
            if ((parseInt(getChinaLastKelly3) < parseInt(getChinaLastKelly0)) & (parseInt(getChinaLastKelly3) < parseInt(getChinaLastKelly1))) {
                //確保皇冠負
                if (
                    (parseInt(getCrownLastKelly0) < parseInt(getCrownLastKelly3)) &
                    (parseInt(getCrownLastKelly0) < parseInt(getCrownLastKelly1))
                ) {
                    document.getElementById("oupeikaili").innerHTML+= "<strong style='background: red; color:white'>尾盤答案:競彩正 皇冠負 = 買主隊LEVEL1</strong><br>"
                    //console.log('競彩正 皇冠負 = 買上盤')
                }
            }
        }
       //初盤方法1 BET365 + CROWN + HKJC/CHINA大法
        var useHKJC = false
        var useChina = false
        if((typeof get365KellyName != 'undefined') & (typeof getCrownKellyName != 'undefined')){
            if((typeof getHKJCKellyName != 'undefined') | (typeof getChinaKellyName != 'undefined')){
                //confirm 365 and crown are least than 100
                if(parseInt(get365FirstKelly3) < 100 & parseInt(get365FirstKelly1) < 100 & parseInt(get365FirstKelly0) < 100 & parseInt(getCrownFirstKelly3) < 100 & parseInt(getCrownFirstKelly1) < 100 & parseInt(getCrownFirstKelly0) < 100){
                    if(parseInt(getHKJCFirstKelly3) < 100 & parseInt(getHKJCFirstKelly1) < 100 & parseInt(getHKJCFirstKelly0) < 100 ){
                        useHKJC = true;
                    }else if (parseInt(getChinaFirstKelly3) < 100 & parseInt(getChinaFirstKelly1) < 100 & parseInt(getChinaFirstKelly0) < 100){
                        useChina = true;
                    }
                    if (useHKJC == true){
                        //主隊
                        if((parseInt(get365FirstKelly3) < parseInt(get365FirstKelly0)) & (parseInt(get365FirstKelly3) < parseInt(get365FirstKelly1))){
                            if((parseInt(getCrownFirstKelly3) < parseInt(getCrownFirstKelly0)) & (parseInt(getCrownFirstKelly3) < parseInt(getCrownFirstKelly1))){
                                //沒有對比平局
                                if((parseInt(getHKJCFirstKelly0) < parseInt(getHKJCFirstKelly3))){
                                   document.getElementById("oupeikaili").innerHTML+= "<strong style='background: red; color:white'>初盤答案:365正 皇冠正 馬會負 = 買主隊LEVEL3</strong><br>"
                                   if((parseInt(getChinaFirstKelly0) > parseInt(getChinaFirstKelly3))){
                                       document.getElementById("oupeikaili").innerHTML+= "<strong style='background: red; color:white'>警告:馬會和競彩意見不合</strong><br>"
                                   }
                                }
                            }
                        }
                        //客隊
                        if((parseInt(get365FirstKelly0) < parseInt(get365FirstKelly3)) & (parseInt(get365FirstKelly0) < parseInt(get365FirstKelly1))){
                            if((parseInt(getCrownFirstKelly0) < parseInt(getCrownFirstKelly3)) & (parseInt(getCrownFirstKelly0) < parseInt(getCrownFirstKelly1))){
                                //沒有對比平局
                                if(parseInt(getHKJCFirstKelly3) < parseInt(getHKJCFirstKelly0)){
                                   document.getElementById("oupeikaili").innerHTML+= "<strong style='background: blue; color:white'>初盤答案:365負 皇冠負 馬會正 = 買客隊LEVE3</strong><br>"
                                    if(parseInt(getChinaFirstKelly3) > parseInt(getChinaFirstKelly0)){
                                        document.getElementById("oupeikaili").innerHTML+= "<strong style='background: blue; color:white'>注意:馬會和競彩意見不合</strong><br>"
                                    }
                                }
                            }
                        }
                    }
                    if (useChina == true){
                        //主隊
                        if((parseInt(get365FirstKelly3) < parseInt(get365FirstKelly0)) & (parseInt(get365FirstKelly3) < parseInt(get365FirstKelly1))){
                            if((parseInt(getCrownFirstKelly3) < parseInt(getCrownFirstKelly0)) & (parseInt(getCrownFirstKelly3) < parseInt(getCrownFirstKelly1))){
                                //沒有對比平局
                                if((parseInt(getChinaFirstKelly0) < parseInt(getChinaFirstKelly3))){
                                   document.getElementById("oupeikaili").innerHTML+= "<strong style='background: red; color:white'>初盤答案:365正 皇冠正 競彩負 = 買主隊 LEVEL3</strong><br>"
                                    if((parseInt(getHKJCFirstKelly0) > parseInt(getHKJCFirstKelly3))){
                                        document.getElementById("oupeikaili").innerHTML+= "<strong style='background: red; color:white'>注意:馬會和競彩意見不合</strong><br>"
                                    }
                                }

                            }
                        }
                        //客隊
                        if((parseInt(get365FirstKelly0) < parseInt(get365FirstKelly3)) & (parseInt(get365FirstKelly0) < parseInt(get365FirstKelly1))){
                            if((parseInt(getCrownFirstKelly0) < parseInt(getCrownFirstKelly3)) & (parseInt(getCrownFirstKelly0) < parseInt(getCrownFirstKelly1))){
                                //沒有對比平局
                                if(parseInt(getChinaFirstKelly3) < parseInt(getChinaFirstKelly0)){
                                   document.getElementById("oupeikaili").innerHTML+= "<strong style='background: blue; color:white'>初盤答案:365負 皇冠負 競彩正 = 買客隊LEVEL3</strong><br>"
                                    if(parseInt(getHKJCFirstKelly3) > parseInt(getHKJCFirstKelly0)){
                                        document.getElementById("oupeikaili").innerHTML+= "<strong style='background: blue; color:white'>注意:馬會和競彩意見不合</strong><br>"
                                    }
                                }
                            }
                        }
                    }
                }else {
                    document.getElementById("oupeikaili").innerHTML+= "<strong style='color:green'>注意:初盤部份指標已超過100 數據和建議不可作準</strong><br>"
                }
            }
        }

        //初盤方法2 BET365最低 + 威廉最低 + CROWN對家最低
        //checkdata is not undefined
        if ((typeof get365KellyName != 'undefined') & (typeof getWinsonKellyName != 'undefined') & (typeof getCrownKellyName != 'undefined')){
            //confirm all value are less than 100
            if(parseInt(get365FirstKelly3) < 100 & parseInt(get365FirstKelly1) < 100 & parseInt(get365FirstKelly0) < 100 & parseInt(getCrownFirstKelly3) < 100 & parseInt(getCrownFirstKelly1) < 100 & parseInt(getCrownFirstKelly0) < 100 & parseInt(getWinsonFirstKelly3) < 100 & parseInt(getWinsonFirstKelly1) < 100 & parseInt(getWinsonFirstKelly0) < 100){
               //主隊
                if((parseInt(get365FirstKelly3) < parseInt(get365FirstKelly0)) & (parseInt(get365FirstKelly3) < parseInt(get365FirstKelly1))){
                    if((parseInt(getWinsonFirstKelly3) < parseInt(getWinsonFirstKelly0)) & (parseInt(getWinsonFirstKelly3) < parseInt(getWinsonFirstKelly1))){
                        //沒有對比平局
                        if((parseInt(getCrownFirstKelly0) < parseInt(getCrownFirstKelly3))){
                            document.getElementById("oupeikaili").innerHTML+= "<strong style='background: red; color:white'>初盤答案:365正 威廉正 皇冠負 = 買主隊 LEVEL2</strong><br>"
                        }
                    }
                }
                //客隊
                if((parseInt(get365FirstKelly0) < parseInt(get365FirstKelly3)) & (parseInt(get365FirstKelly0) < parseInt(get365FirstKelly1))){
                    if((parseInt(getWinsonFirstKelly0) < parseInt(getWinsonFirstKelly3)) & (parseInt(getWinsonFirstKelly0) < parseInt(getWinsonFirstKelly1))){
                        //沒有對比平局
                        if(parseInt(getCrownFirstKelly3) < parseInt(getCrownFirstKelly0)){
                            document.getElementById("oupeikaili").innerHTML+= "<strong style='background: blue; color:white'>初盤答案:365負 威廉負 皇冠勝 = 買客隊 LEVEL2</strong><br>"
                        }
                    }
                }
            }
        }
        //初盤方法3 澳門=馬會=競彩 VS 皇冠 > 365 > 威廉 對立

    }
})();
