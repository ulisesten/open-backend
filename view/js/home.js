
var mUsername = localStorage.username;
var mId = localStorage.id;

if( mId === undefined || mUsername === undefined)
    window.location.href = '/ingresar';
else {

var socket = io.connect()

socket.on('message', (data) => {
    console.log(data);
    console.log( mUsername, mId );

    if( data.sender === mId)
        messages.append(newSenderMessage(data.message));
    else
        messages.append(newIncomingMessage(data.message));
})


/**@Send_message */

var sendMessage = el('message-button');
var messages = el('messages');

sendMessage.addEventListener('click', () => {
    var messageContent = el('message-input').value;

    //messages.append(newSenderMessage(messageContent));
    var messageObject = {
        username: mUsername,
        message: messageContent,
        sender: mId
    }
    socket.emit('message', messageObject );
});

function newSenderMessage(message){

    var row = newEl('li');
    row.setAttribute('class','senderMessage');
    row.innerHTML = message;
    console.log(message);

    return row;
}

function newIncomingMessage(message){
    var row = newEl('li');
    row.setAttribute('class','incomingMessage');
    row.innerHTML = message;
    console.log(message);

    return row;
}



/**@Utils */
function el(id){
    return document.getElementById(id);
}

function newEl(el){
    return document.createElement(el);
}

}