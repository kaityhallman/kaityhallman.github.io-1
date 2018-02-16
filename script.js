document.addEventListener("DOMContentLoaded", function() {
  var showHiddenObj = document.getElementById('show-projects');
  var hiddenObjs = document.querySelector('.hidden-until-hover');
  var hoverLeave = document.getElementById('container');

  showHiddenObj.addEventListener('mouseover', function() {
    hiddenObjs.className += " active";
  });

  hoverLeave.addEventListener('mouseleave', function() {
    if (hiddenObjs.classList.contains('active')) {
      hiddenObjs.classList.remove('active');
    }
  });
});
