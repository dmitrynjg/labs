var btnSend = document.querySelector('.chat-form-wrap-send__btn');
function addMessage(iSender) {
  var messageOutput = document.querySelector('.chat-messages-output');
  var messageText = document.querySelector('.chat-form-wrap__input').value;
  if (messageText.length > 0) {
    messageText = messageText.replace(/</g, '&lt;');
    messageText = messageText.replace(/>/g, '&gt;');
    var outputMessageTemplate = '<div class=\'bubble-message-user\'>';
    outputMessageTemplate += '<div class=\'bubble-message-user-avatar\'>'
    if (iSender === true) {
      outputMessageTemplate += '<img src=\'https://sun9-25.userapi.com/c851328/v851328945/1b71c3/4_RHEVaR4Kc.jpg\' alt="avatar user"';
      outputMessageTemplate += 'class=\'bubble-message-user-avatar__photo\'>';
      outputMessageTemplate += '</div>';
      outputMessageTemplate += '<div class=\'bubble-message-user__name\'>Dmitry Shashkov</div>';
    }
    else {
      outputMessageTemplate += '<img src="https://sun9-20.userapi.com/c855520/v855520077/17338f/gg7vteDojmg.jpg" alt="avatar user"';
      outputMessageTemplate += 'class=\'bubble-message-user-avatar__photo\'>';
      outputMessageTemplate += '</div>';
      outputMessageTemplate += '<div class=\'bubble-message-user__name\'>Alexander Kalinin</div>';
    }
    outputMessageTemplate += '</div>';
    outputMessageTemplate += '<div class=\'bubble-message__text\'>' + messageText + '</div>';
    if (iSender === true) {
      messageOutput.innerHTML += '<div class=\'chat-messages-bubble chat-messages-bubble_right bubble-message\'>' + outputMessageTemplate + '</div>';
    }
    else {
      messageOutput.innerHTML += '<div class="chat-messages-bubble chat-messages-bubble_left bubble-message">' + outputMessageTemplate + '</div>';
    }
    document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
  }
}
btnSend.onclick = function(){
  addMessage(true);
};