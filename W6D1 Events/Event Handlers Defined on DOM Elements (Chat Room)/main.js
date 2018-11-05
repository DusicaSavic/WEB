var $sendButton = document.querySelector('.button');
var $messageField = document.querySelector('.message-field');
var $chatArea = document.querySelector('.chat-area');


$sendButton.onclick = function () {
    var $message = document.createElement('div');
    $message.setAttribute('class', 'message-single');

    $message.textContent = $messageField.value;
    $chatArea.appendChild($message);
    $messageField.value = '';
}

