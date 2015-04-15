!function(e,t,r){"use strict";function o(){s.showMessage(u.IE8)}function a(){var e=t.createElement("h1");e.id=s.idName.heading,e.innerHTML=E.message,k.appendChild(e),s.showMessage(u.IE7);var o=t.getElementsByTagName("a");o[0].style.color="red",o[1]!==r&&(o[1].style.color="white")}function i(e){var t;if(e=e||{},e.killIE!==r&&(d=e.killIE),e.url!==r&&(f.chromeURL=e.url),e.label!==r&&(u.label=e.label),e.msg!==r)for(t=7;9>=t;t++)"string"==typeof e.msg["ie"+t]&&(u["IE"+t].message=e.msg["ie"+t]);for(t=7;9>=t;t++)"function"==typeof e["up"+t]&&(u["IE"+t].upgrade=e["up"+t])}var n=null,s={css:"#kick-ie,body{margin:0}#kick-ie,#kick-ie-heading{right:0;left:0;text-align:center}#kick-ie{font:16px/1.5 Arial,sans-serif;position:fixed;top:0;padding:.2em 0;border:1px solid}#kick-ie a{font-weight:700;text-decoration:none;border-bottom:1px dashed}#kick-ie-close{font:700 24px/1 Arial,sans-serif;position:fixed;top:0;right:0;height:inherit;padding:.2em;cursor:pointer;border:none!important}#kick-ie-heading{font:32px/1.5 Arial,sans-serif;position:absolute;top:45%}",idName:{wrap:"kick-ie",close:"kick-ie-close",heading:"kick-ie-heading"}},l=9,d=l,c=!1,g=!1,m=/360SE|BIDUBrowser|LBBROWSER|Maxthon|MetaSr|QQBrowser|UBrowser/i,p='为了获得最佳的浏览体验，我们建议您切换 <strong id="the-flash">急(shan)速(dian)</strong>模式 或选用 <a href="{{chromeURL}}" target="_blank">谷歌浏览器</a>。',u={label:"365 安全卫士提醒",ver:-1,lte9:!1,lte8:!1,lte7:!1,IE9:{color:"#000",borderColor:"#CCC",background:"#CCC",message:'您的浏览器太古董了，还不速速 <a href="{{chromeURL}}" target="_blank">升(geng)级(xin)</a>！',upgrade:null},IE8:{color:"#FFF",borderColor:"#EDC048",background:"#E29808",message:"您的浏览器不是最新的。您正在使用 Internet Explorer 的一个老版本。"+p,upgrade:null},IE7:{color:"#FFF",borderColor:"#AC1B1B",background:"#AC1B1B",message:"似乎您正在使用 Internet Explorer 的一个不安全的版本。使用老旧浏览器会对您的计算机安全造成威胁。<br>在 Windows XP 上，您无法升级到最新版本。"+p,upgrade:null},cookieName:"browsehappy",cookieExpires:6048e5},E={message:'是时候<a href="//windows.microsoft.com/zh-cn/windows/upgrade-your-browser" target="_blank">升级</a>你的浏览器了'},f={chromeURL:"//www.google.com/chrome"},h=t.getElementsByTagName("html")[0],k=t.getElementsByTagName("body")[0];!function(r){r.getInternetExplorerVersion=function(){var e=-1;if("Microsoft Internet Explorer"===navigator.appName){var r=navigator.userAgent,o=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),a=t.documentMode;null!==o.exec(r)&&(e=parseFloat(RegExp.$1)),e=e>a?a:e,7===e&&a>7&&(e=a),g=m.test(r)}return e},r.addEvent=function(){return t.addEventListener?function(e,t,r){if(e.length)for(var o=0;o<e.length;o++)addEvent(e[o],t,r);else e.addEventListener(t,r,!1)}:function(t,r,o){if(t.length)for(var a=0;a<t.length;a++)addEvent(t[a],r,o);else t.attachEvent("on"+r,function(){return o.call(t,e.event)})}}(),r.cookies={getItem:function(e){return e?decodeURIComponent(t.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,r,o,a,i,n){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(o)switch(o.constructor){case Number:s=1/0===o?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+o;break;case String:s="; expires="+o;break;case Date:s="; expires="+o.toUTCString()}return t.cookie=encodeURIComponent(e)+"="+encodeURIComponent(r)+s+(i?"; domain="+i:"")+(a?"; path="+a:"")+(n?"; secure":""),!0}},r.close=function(e){e=e||u.cookieExpires;var t=new Date;t.setTime(t.getTime()+e),r.cookies.setItem(u.cookieName,":(",t)},r.isVisible=function(){return null===r.cookies.getItem(u.cookieName)},r.hideMessage=function(){var e=t.getElementById(r.idName.close);r.addEvent(e,"click",function(){r.close(),t.getElementById(r.idName.wrap).style.display="none"})},r.showMessage=function(e){if(r.isVisible()){var o=t.createElement("p");if(o.id=r.idName.wrap,o.innerHTML=(u.label?u.label+"：":"")+e.message.replace("{{chromeURL}}",f.chromeURL),o.style.color=e.color,o.style.borderColor=e.borderColor,o.style.background=e.background,u.ver>7){var a=t.createElement("a");a.id=r.idName.close,a.innerHTML="×",o.appendChild(a)}k.appendChild(o),u.ver>7&&r.hideMessage()}},r.resetMessage=function(){null!==t.getElementById(r.idName.wrap)&&k.removeChild(t.getElementById(r.idName.wrap))},r.addClass=function(e){h.className+=" "+e},r.addCss=function(){var e=t.head||t.getElementsByTagName("head")[0],o=t.createElement("style");o.type="text/css",o.styleSheet?o.styleSheet.cssText=r.css:o.appendChild(t.createTextNode(r.css)),e.appendChild(o)}}(s),s.init=function(e){if(n)return void console.warn("KickIE was initialized!");if(n=!0,s.resetMessage(),u.ver=s.getInternetExplorerVersion(),-1===u.ver);else{switch(i(e),c=!0,h.className="ie",u.ver){case 9:s.addClass("ie9"),u.lte9=!0;break;case 8:s.addClass("ie8"),u.lte9=!0,u.lte8=!0;break;case 7:s.addClass("ie7"),u.lte9=!0,u.lte8=!0,u.lte7=!0}if(u.lte9){s.addCss(),s.addClass("lte9");var t={url:f.chromeURL,label:u.label,close:s.close,isVisible:s.isVisible()};9===u.ver&&d>=9&&(u.IE9.upgrade?(t.msg=u.IE9.message,u.IE9.upgrade(t)):s.showMessage(u.IE9)),u.lte8&&(s.addClass("lte8"),u.lte7?(s.addClass("lte7"),k.innerHTML="",t.msg=u.IE7.message,(u.IE7.upgrade?u.IE7.upgrade:a)(t)):(t.msg=u.IE8.message,(u.IE8.upgrade?u.IE8.upgrade:o)(t)))}}},s.init(),n=!1,e.KickIE=function(e){s.init(e)},e.isIE=c,e.isDualCore=g,e.IE={ver:u.ver,lte9:u.lte9,lte8:u.lte8,lte7:u.lte7},"object"==typeof module&&"object"==typeof module.exports&&(module.exports=e.KickIE,module.exports.isIE=e.isIE,module.exports.isDualCore=e.isDualCore,module.exports.IE=e.IE)}(window,document);
/**
 * 以下代码取自他人之手并稍做修正（只为表明具体用法，请无视代码风格）
 */
(function() {

  var url = {
    css: 'css/ie.css',
    imgBasePath: 'images/ie/',
    ie: 'http://windows.microsoft.com/zh-cn/windows/upgrade-your-browser',
    ff: 'http://www.firefox.com.cn/download/',
    chrome: 'http://dlsw.baidu.com/sw-search-sp/soft/9d/14744/ChromeStandaloneSetup41.0.2272.89.1426235198.exe' // 可直接下载的Chrome地址
  };

  KickIE({
    killIE: 8,
    url: url.chrome,
    label: false,
    up8: function(opts) {
      if (opts.isVisible) {
        $('head').append('<link rel="stylesheet" href="' + url.css + '">');
        var output = '<div id="kickIe">您使用的浏览器版本较低，会影响网站部分功能，请切换成<a href="javascript:void(0)" class="kick_jisu">极速模式</a>或升级。<a target="_blank" href="' + url.ie + '" class="kick_upgrade">立刻升级</a><em class="kick_close">×</em></div>';
        // 选择浏览器
        output += '<div id="kickIe_bg"></div><div id="kickIe_con"><div class="kickIe_con_padd">' +
          '<div class="kickIe_con_head">' +
          '<h5>请选择您目前使用的浏览器：</h5>' +
          '<a href="javascript:;" class="kickIe_con_close">×</a>' +
          '<ul class="kickIe_con_ie clearfix">' +
          '<li class="list_1 cur">' +
          '<span>360安全浏览器</span>' +
          '</li>' +
          '<li class="list_2">' +
          '<span>360急速浏览器</span>' +
          '</li>' +
          '<li class="list_3">' +
          '<span>搜狗浏览器</span>' +
          '</li>' +
          '<li class="list_4">' +
          '<span>遨游浏览器</span>' +
          '</li>' +
          '<li class="list_5">' +
          '<span>猎豹浏览器</span>' +
          '</li>' +
          '<li class="list_6">' +
          '<span>百度浏览器</span>' +
          '</li>' +
          '<li class="list_7">' +
          '<span>其他浏览器</span>' +
          '</li></ul></div>' +
          '<ul class="kickIe_con_list">' +
          '<li class="list_1" style="display:block;"><h6>如何切换</h6><p>1.点击图标切换模式</p><img src="' + url.imgBasePath + 'list_1_1.jpg"><p>2.选择急速模式</p><img src="' + url.imgBasePath + 'list_1_2.jpg"><p>3.切换完成</p></li>' +
          '<li class="list_2"><h6>如何切换</h6><p>1.点击图标切换模式</p><img src="' + url.imgBasePath + 'list_2_1.jpg"><p>2.选择急速模式</p><img src="' + url.imgBasePath + 'list_2_2.jpg"><p>3.切换完成</p></li>' +
          '<li class="list_3"><h6>如何切换</h6><p>1.点击图标切换模式</p><img src="' + url.imgBasePath + 'list_3_1.jpg"><p>2.选择急速模式</p><img src="' + url.imgBasePath + 'list_3_2.jpg"><p>3.切换完成</p><img src="' + url.imgBasePath + 'list_3_3.jpg"></li>' +
          '<li class="list_4"><h6>如何切换</h6><p>1.点击图标或点击菜单栏-切换浏览器内核，切换模式</p><img src="' + url.imgBasePath + 'list_4_1.jpg"><p>2.点击直接切换急速模式</p><img src="' + url.imgBasePath + 'list_4_2.jpg"><p>3.切换完成</p><img src="' + url.imgBasePath + 'list_4_3.jpg"></li>' +
          '<li class="list_5"><h6>如何切换</h6><p>1.点击图标切换模式</p><img src="' + url.imgBasePath + 'list_5_1.jpg"><p>2.点击直接切换急速模式</p><img src="' + url.imgBasePath + 'list_5_2.jpg"><p>3.切换完成</p></li>' +
          '<li class="list_6"><h6>如何切换</h6><p>1.点击图标切换模式</p><img src="' + url.imgBasePath + 'list_6_1.jpg"><p>2.点击直接切换急速模式</p><img src="' + url.imgBasePath + 'list_6_2.jpg"><p>3.切换完成</p><img src="' + url.imgBasePath + 'list_6_3.jpg"></li>' +
          '<li class="list_7">点击<a target="_blank" href="' + url.ie + '" class="kick_upgrade">立刻升级</a>或推荐使用<a href="' + opts.url + '" class="select_chrome"></a></li>' +
          '</ul></div></div>';
        $('body').append(output);
        // 操作
        $(document).on('click', '#kickIe .kick_jisu', function() {
          $('body').addClass('kickIe_body');
        }).on('mouseenter', '.kickIe_con_ie li', function() {
          var index = $(this).index();
          $(this).addClass('cur').siblings().removeClass('cur');
          $('.kickIe_con_list li').eq(index).show().siblings().hide();
        }).on('click', '#kickIe_con .kickIe_con_close', function() {
          $('body').removeClass('kickIe_body');
        }).on('click', '#kickIe .kick_close', function() {
          opts.close(); // 1周(604800000)内不显示
          $('#kickIe').remove();
        });
      }
    },
    up7: function(opts) {
      var byeie6 = '<link rel="stylesheet" href="' + url.css + '"><div class="wel-box"><div class="wel-text"><h2>推荐使用以下浏览器访问易班网：</h2><ul><li class="tuijian"><a href="' + opts.url + '" title="Chrome"><em class="chrome"></em>Chrome</a><i></i></li><li><a target="_blank" href="' + url.ff + '" title="Firefox"><em class="firefox"></em>Firefox</a></li><li><a target="_blank" href="' + url.ie + '" title="IE10"><em class="ie10"></em>IE10</a></li></ul></div></div>';
      $('body').append(byeie6);
    }
  });

})();
