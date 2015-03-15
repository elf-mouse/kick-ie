/**
 * Kill IE
 * @author Elf-mousE
 * @since 2015.03.14
 */

var chromeURL = 'http://www.google.com/chrome',
  KillIE = 9, // default for lteIE9
  isIE = false,
  IE = {
    title: '365 安全卫士提醒',
    ver: getInternetExplorerVersion(),
    lte9: false,
    lte8: false,
    lte7: false,
    IE9: {
      color: '#000',
      borderColor: '#CCC',
      background: '#CCC',
      message: '您的浏览器太古董了，还不速速 <a href="{{chromeURL}}" target="_blank">升(geng)级(xin)</a>！',
      upgrade: null
    },
    IE8: {
      color: '#FFF',
      borderColor: '#EDC048',
      background: '#E29808',
      message: '您的浏览器不是最新的。您正在使用 Internet Explorer 的一个老版本。为了获得最佳的浏览体验，我们建议您选用 <a href="{{chromeURL}}" target="_blank">谷歌浏览器</a>。',
      upgrade: null
    },
    IE7: {
      color: '#FFF',
      borderColor: '#AC1B1B',
      background: '#AC1B1B',
      message: '似乎您正在使用 Internet Explorer 的一个不安全的版本。使用老旧浏览器会对您的计算机安全造成威胁。<br>在 Windows XP 上，您无法升级到最新版本。为了获得最佳的浏览体验，我们建议您选用 <a href="{{chromeURL}}" target="_blank">谷歌浏览器</a>。',
      upgrade: null
    },
    cookieName: 'browsehappy',
    cookieExpires: 10 // 60 * 60 * 24 * 7 // one week
  },
  microsoft = {
    message: '是时候<a href="http://windows.microsoft.com/zh-cn/windows/upgrade-your-browser" target="_blank">升级</a>你的浏览器了'
  },
  htmlRoot = document.getElementsByTagName('html')[0],
  bodyRoot = document.getElementsByTagName('body')[0];

function setOpts(opts) {
  opts = opts || {};
  if (opts.KillIE !== undefined) {
    KillIE = opts.KillIE;
  }
  if (opts.url !== undefined) {
    chromeURL = opts.url;
  }
  if (opts.title !== undefined) {
    IE.title = opts.title;
  }
  for (var i = 7; i <= 9; i++) {
    if (opts['up' + i] !== undefined && typeof opts['up' + i] === 'function') {
      IE['IE' + i].upgrade = opts['up' + i];
    }
  }
}

function init(opts) {
  if (IE.ver === -1) {
    // nonIE
  } else {
    setOpts(opts);
    isIE = true;
    htmlRoot.className = 'ie';
    switch (IE.ver) {
      case 9:
        addClass('ie9');
        IE.lte9 = true;
        break;
      case 8:
        addClass('ie8');
        IE.lte9 = true;
        IE.lte8 = true;
        break;
      case 7:
        addClass('ie7');
        IE.lte9 = true;
        IE.lte8 = true;
        IE.lte7 = true;
        break;
    }
    if (IE.lte9) {
      addClass('lte9');
      polyfill(); // ES5
      // placeholder
      if (IE.ver === 9 && KillIE === 9) {
        IE.IE9.upgrade ? IE.IE9.upgrade() : showMessage(IE.IE9);
      }
      if (IE.lte8) {
        addClass('lte8');
        if (IE.lte7) {
          addClass('lte7');
          bodyRoot.innerHTML = ''; // 清屏
          IE.IE7.upgrade ? IE.IE7.upgrade() : forceUpgrade(); // 强制升级
        } else {
        	IE.IE8.upgrade ? IE.IE8.upgrade() : guideUpgrade(); // 引导升级
        }
      }
    }
  }
}

init();

// 可自定义
/*init({
  KillIE: 8,
  url: '#可用的谷歌浏览器下载地址',
  title: '某某提醒',
  up8: function() {
    alert(8);
  }
  up7: function() {
    alert(7);
  }
});*/
