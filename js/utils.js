/**
 * Parsing the User-Agent String
 * https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 */

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
function getInternetExplorerVersion() {
  var rv = -1; // Return value assumes failure.
  if (navigator.appName === 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
    var mode = document.documentMode;
    if (re.exec(ua) !== null) {
      rv = parseFloat(RegExp.$1);
    }
    rv = mode < rv ? mode : rv;
    if (rv === 7 && mode > 7) { // 兼容模式
      rv = mode;
    }
  }
  return rv;
}

/**
 * HTML5工作组
 * http://www.oschina.net/question/54100_25614
 */
var addEvent = (function() {
  if (document.addEventListener) {
    return function(el, type, fn) {
      if (el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      } else {
        el.addEventListener(type, fn, false);
      }
    };
  } else {
    return function(el, type, fn) {
      if (el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      } else {
        el.attachEvent('on' + type, function() {
          return fn.call(el, window.event);
        });
      }
    };
  }
})();

// from cookies.js
var docCookies = {
  getItem: function(sKey) {
    if (!sKey) {
      return null;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  }
};

function hideMessage() {
  var btn = document.getElementById('ie-warning-close');

  addEvent(btn, 'click', function() {
    document.getElementById('ie-warning').style.display = 'none';
    docCookies.setItem(IE.cookieName, ':(', IE.cookieExpires);
  });
}

function showMessage(object) {
  if (docCookies.getItem(IE.cookieName) === null) {
    var IEWarning = document.createElement('p');
    IEWarning.id = 'ie-warning';
    IEWarning.innerHTML = IE.title + '：' + object.message;
    IEWarning.style.color = object.color;
    IEWarning.style.borderColor = object.borderColor;
    IEWarning.style.background = object.background;
    if (IE.ver > 7) {
      var IEWarningClose = document.createElement('a');
      IEWarningClose.id = 'ie-warning-close';
      IEWarningClose.innerHTML = '×';
      IEWarning.appendChild(IEWarningClose);
    }
    document.body.appendChild(IEWarning);
    if (IE.ver > 7) {
      hideMessage();
    }
  }
}

function addClass(className) {
  htmlRoot.className += ' ' + className;
}
