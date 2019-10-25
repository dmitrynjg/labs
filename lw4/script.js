let windowProgramm = document.querySelectorAll('.filesharing-item');
let currentWindow = 0;
windowProgramm[currentWindow].classList.add('active');
let elementDirectory = document.querySelectorAll('.filesharing-item.active .directory-items .directory-item');
let currentElement = 0;
elementDirectory[currentElement].classList.add('active');
let lastElement;
document.addEventListener('keydown', function (event) {
  console.log(event.keyCode);
  if (event.keyCode == 40) {
    elementDirectory[currentElement].classList.remove('active');
    if (currentElement + 1 == elementDirectory.length) {
      currentElement = 0;
    }
    else {
      currentElement++;
    }
    elementDirectory[currentElement].classList.add('active');
  }
  if (event.keyCode == 38) {
    elementDirectory[currentElement].classList.remove('active');
    if (currentElement == 0) {
      currentElement = elementDirectory.length;
    }
    currentElement--;
    elementDirectory[currentElement].classList.add('active');
  }
  if (event.keyCode == 39) {//right
    elementDirectory[currentElement].classList.remove('active');
    windowProgramm[currentWindow].classList.remove('active');
    if (currentWindow == windowProgramm.length - 1) {
      currentWindow = 0;
    }
    else {
      currentWindow++;
    }
    lastElement = currentElement;
    windowProgramm[currentWindow].classList.add('active');
    elementDirectory = document.querySelectorAll('.filesharing-item.active .directory-items .directory-item');
    if (lastElement > elementDirectory.length - 1) {
      currentElement = elementDirectory.length - 1;
    }
    elementDirectory[currentElement].classList.add('active');
  }
  if (event.keyCode == 37) {//left
    elementDirectory[currentElement].classList.remove('active');
    windowProgramm[currentWindow].classList.remove('active');
    if (currentWindow <= 0) {
      currentWindow = windowProgramm.length;
    }
    currentWindow--;
    lastElement = currentElement;
    windowProgramm[currentWindow].classList.add('active');
    elementDirectory = document.querySelectorAll('.filesharing-item.active .directory-items .directory-item');
    if (lastElement > elementDirectory.length - 1) {
      currentElement = elementDirectory.length - 1;
    }
    elementDirectory[currentElement].classList.add('active');
  }
});