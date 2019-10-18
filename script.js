let btnblock = document.querySelector('.btn');
let button = document.createElement('input');
let iframemain = document.querySelector('iframe');
let commentbtn = document.querySelector('.form-comment button');
let commenttitle = document.querySelector('.form-comment input');
let commenttext = document.querySelector('.form-comment textarea');
let commentblock = document.querySelector('.content-comments');
let video = [
  { src: 'https://www.youtube.com/embed/4N3N1MlvVc4', comment: [] },
  { src: 'https://www.youtube.com/embed/lFGnsdV-sR4', comment: [] },
  { src: 'https://www.youtube.com/embed/nLPd4TE7eAI', comment: [] },
  { src: 'https://www.youtube.com/embed/s7L2PVdrb_8', comment: [] }
];
let current = 0;
let commentq;
let outcomment;
for (let i = 0; i < video.length; i++) {
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Видео ' + (i + 1));
  button.setAttribute('onclick', 'playvideo(' + i + ')');
  btnblock.appendChild(button.cloneNode());
}
iframemain.src = video[current].src;
function playvideo(num) {
  current = num;
  iframemain.src = video[current].src;

}

commentbtn.onclick = addcomment;

function showcomment() {

  outcomment = ' ';
  for (i = 0; i <= commentq; i++) {
    outcomment += '<div class=\'comment\'><div class=\'comment-name\'>' + video[current].comment[i].title + '</div>';
    outcomment += '<div class=\'comment-text\'>' + video[current].comment[i].text + '</div></div>';
  }

  commentblock.appendChild(document.createTextNode(outcomment));
  commentblock.innerHTML = outcomment;
}

function addcomment() {
  commentq = Object.keys(video[current].comment).length;
  video[current].comment[commentq] = { title: commenttitle.value, text: commenttext.value };
  showcomment();
}


