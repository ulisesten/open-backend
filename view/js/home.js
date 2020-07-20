
/**@Utils */
function el(id){
    return document.getElementById(id);
}

function newEl(el){
    return document.createElement(el);
}

var queryHeaders = {
    'Content-Type': 'application/json; charset=utf-8'
}



/**User Info */
var mUsername = localStorage.username;
var mId = localStorage.id;

if( mId === undefined || mUsername === undefined)
    window.location.href = '/ingresar';
else {




//var socket = io.connect()
var socket = io.connect(window.location.origin, { query: `id=${mId}` })

socket.on('message', (data) => {
    console.log(data);
    console.log( mUsername, mId );

    if( data.from_id === mId)
        messages.append(newSenderMessage(data));
    else
        messages.append(newIncomingMessage(data));

    messages.scrollTo(0,messages.scrollHeight);
})





/**@Send_message */
var sendMessage = el('message-button');
var messages = el('messages');

sendMessage.addEventListener('click', () => {
    var messageContent = el('message-input').value;
    el('message-input').value = '';

    //messages.append(newSenderMessage(messageContent));
    var messageObject = {
        username: mUsername,
        message: messageContent,
        from_id: mId
    }

    socket.emit('message', messageObject );
});





function newSenderMessage(data){
    var div = newEl('div');
    div.setAttribute('class','bubble-container');

    var row = newEl('li');
    row.setAttribute('class','senderMessage');
    row.innerHTML = data.message;

    var dateSpan = newEl('div');
    dateSpan.setAttribute('class', 'timestamp-right')
    dateSpan.innerHTML = data.timestamp;

    div.append(row);
    div.append(dateSpan);

    return div;
}





function newIncomingMessage(data){
    var div = newEl('div');
    var image = newEl('img');
    image.setAttribute('src', 'https://res.cloudinary.com/djlzeapiz/image/upload/c_scale,w_30/v1571063915/profile/userprofile2.jpg')
    image.setAttribute('class','profileImage');

    var nameSpan = newEl('span')
    nameSpan.setAttribute('class', 'username')
    nameSpan.innerHTML = data.username;

    var row = newEl('li');
    row.setAttribute('class','incomingMessage');
    row.innerHTML = data.message;
    //console.log(message);
    var dateSpan = newEl('span');
    dateSpan.setAttribute('class', 'timestamp')
    dateSpan.innerHTML = data.timestamp;

    div.append(image);
    div.append(nameSpan);
    div.append(row)
    div.append(dateSpan)

    return div;
}




/**GET functions */
function getData(url){

    fetch( url, {
        credentials: 'include',
        headers: queryHeaders,
        method: 'GET'
    }).then( res=> {
        if( !res.ok ){
            console.log('getProduct: Error');
            return;
        }

        return res.json();

    }).then( res=> {
        if( res !== null ){
            console.log( res );
        }
    });

}




/**Getting products */
getData('getProducts');

}/**else end */