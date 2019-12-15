'use strict';
var btnSend = document.querySelector('.chat-form-wrap-send__btn');
function addMessage(iSender) {
  var messageText = document.querySelector('.chat-form-wrap__input').value;
  if (messageText.length > 0) {
    messageText = messageText.replace(/</g, '&lt;');
    messageText = messageText.replace(/>/g, '&gt;');
    var messageOutput = document.createElement('div');
    var name, avatar;
    if (iSender) {
      messageOutput.className = 'chat-messages-bubble chat-messages-bubble_right bubble-message';
      name = 'Dmitry Shashkov';
      avatar = 'images/dmitry.jpg';
    }
    else {
      messageOutput.className = 'chat-messages-bubble chat-messages-bubble_left bubble-message';
      name = 'Alexander Kalinin';
      avatar = 'images/alexander.jpg';
    }
    var messageTemplate = '<div class=\'bubble-message-user\'>' +
      '<div class=\'bubble-message-user-avatar\'>' +
      '<img src=\'' + avatar + '\' alt=\'avatar user\' class=\'bubble-message-user-avatar__photo\' alt=\'аватарка\'>' +
      '</div>' +
      '<div class=\'bubble-message-user__name\'>' + name + '</div>' +
      '</div>' +
      '<div class=\'bubble-message__text\'>' + messageText + '</div>';
    messageOutput.innerHTML = messageTemplate;
    document.querySelector('.chat-messages-output').appendChild(messageOutput);
    var chat = document.querySelector('.chat-messages');
    chat.scrollTop = chat.scrollHeight;
  }
}
btnSend.onclick = function () {
  addMessage(true);
};