define(function(require) {

  var $ = require('jquery');
  var detector = require('detector');
  //var KickIE = require('../js/kick-ie.min.js');

  var output = '';
  $.each(detector, function(key, value) {
    if (key !== 'parse') {
      output += '<dl>';
      output += '<dt>' + key + '</dt>';
      output += '<dd><ul>';
      $.each(value, function(k, v) {
        output += '<li>' + k + ' : ' + v + '</li>';
      });
      output += '</ul></dd>';
      output += '</dl>';
    }
  });
  $('body').append(output);

  /**
   * Parsing the User-Agent String
   * https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
   * @updated 2015.03.12 (by Elf-mousE)
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
      if (rv === 7 && mode > 7) {
        rv = mode;
      }
    }
    return rv;
  }

  function checkBrowser() {
    document.getElementById('UA').innerHTML = navigator.userAgent;
    document.getElementById('IE').innerHTML = getInternetExplorerVersion();
    document.getElementById('documentMode').innerHTML = document.documentMode || 0;
    document.getElementById('compatMode').innerHTML = document.compatMode || 0;
  }

  function checkBoxModel() {
    var box = document.getElementById('box');
    box.innerHTML = box.offsetWidth;
  }

  //if (!KickIE.IE.lte7) {
    checkBrowser();
    checkBoxModel();
  //}

});
