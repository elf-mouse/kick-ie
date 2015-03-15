function guideUpgrade() {
  showMessage(IE.IE8);
}

function forceUpgrade() {
  var heading = document.createElement('h1');
  heading.id = 'ie-warning-heading';
  heading.innerHTML = microsoft.message;
  bodyRoot.appendChild(heading);

  showMessage(IE.IE7);

  var links = document.getElementsByTagName('a');
  links[0].style.color = '#F00';
  links[1].style.color = '#FFF';
}
