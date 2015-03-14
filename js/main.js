/**
 * Kill IE
 * @author Elf-mousE
 * @since 2015.03.14
 */

var chromeURL = 'http://www.google.com/chrome',
  KillIE = 8, // default for lteIE8
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
      message: '您的浏览器太古董了，还不速速 <a href="' + chromeURL + '" target="_blank">升(geng)级(xin)</a>！'
    },
    IE8: {
      color: '#FFF',
      borderColor: '#EDC048',
      background: '#E29808',
      message: '您的浏览器不是最新的。您正在使用 Internet Explorer 的一个老版本。为了获得最佳的浏览体验，我们建议您选用 <a href="' + chromeURL + '" target="_blank">谷歌浏览器</a>。'
    },
    IE7: {
      color: '#FFF',
      borderColor: '#AC1B1B',
      background: '#AC1B1B',
      message: '似乎您正在使用 Internet Explorer 的一个不安全的版本。使用老旧浏览器会对您的计算机安全造成威胁。<br>在 Windows XP 上，您无法升级到最新版本。为了获得最佳的浏览体验，我们建议您选用 <a href="' + chromeURL + '" target="_blank">谷歌浏览器</a>。'
    },
    cookieName: 'browsehappy',
    cookieExpires: 60 * 60 * 24 * 7 // one week
  },
  microsoft = {
    message: '是时候<a href="http://windows.microsoft.com/zh-cn/windows/upgrade-your-browser" target="_blank">升级</a>你的浏览器了'
  },
  htmlRoot = document.getElementsByTagName('html')[0];

function init(KillIE, opts) {
  if (IE.ver === -1) {
    // nonIE
  } else {
    KillIE = KillIE || 8;
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
        showMessage(IE.IE9);
      }
      if (IE.lte8) {
        addClass('lte8');
        guideUpgrade(); // 引导升级
        if (IE.lte7) {
          addClass('lte7');
          forceUpgrade(); // 强制升级
        }
      }
    }
  }
}

init();
