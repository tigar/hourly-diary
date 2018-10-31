// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var start = document.getElementById('start');
start.focus();
start.style.backgroundColor = 'green';
start.style.color = 'white';

function updateSibling(sibling) {
  if (sibling != null) {
    start.focus()
    if (start.style.backgroundColor == "green") {
      start.style.backgroundColor = "blue"
    }
    sibling.focus();
    sibling.style.backgroundColor = 'green';
    start = sibling;
  }
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    // up arrow
    console.log("up");
    var idx = start.cellIndex;
    var nextrow = start.parentElement.previousElementSibling;
    if (nextrow != null) {
      var sibling = nextrow.cells[idx];
      updateSibling(sibling);
    }
  } else if (e.keyCode == '40') {
    // down arrow
    var idx = start.cellIndex;
    var nextrow = start.parentElement.nextElementSibling;
    if (nextrow != null) {
      var sibling = nextrow.cells[idx];
      updateSibling(sibling);
    }
  } else if (e.keyCode == '37') {
    // left arrow
    var sibling = start.previousElementSibling;
    updateSibling(sibling);
  } else if (e.keyCode == '39') {
    // right arrow
    var sibling = start.nextElementSibling;
    updateSibling(sibling);
  } else if (e.keyCode == '81') {
    start.style.backgroundColor = "red";
    start.className = "test";
    }
}
