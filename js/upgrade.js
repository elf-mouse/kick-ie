function guideUpgrade() {
  if (IE.ver === 8 && KillIE === 8) {
    showMessage(IE.IE8);
  }
}

function forceUpgrade() {
  var body = document.getElementsByTagName('body')[0],
    heading = document.createElement('h1');
  body.innerHTML = ''; // clear all content
  heading.id = 'ie-warning-heading';
  heading.innerHTML = microsoft.message;
  body.appendChild(heading);
  showMessage(IE.IE7);
  var links = document.getElementsByTagName('a');
  links[0].style.color = '#F00';
  links[1].style.color = '#FFF';
}
