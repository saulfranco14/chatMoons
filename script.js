// Variables
const socket                = io("http://localhost:3000")
const messageContainer      = document.getElementById('message-container')
const messageForm           = document.getElementById('send-container')
const messageInput          = document.getElementById('message-input')

    // Modal User
    const name = prompt("¿Cuál es tu nombre?")
    appendMessage("Bienvenido " + name)
    socket.emit("new-user", name)

    //Message of the users
    socket.on('chat-message', data =>{
       appendMessage(`${data.name} : ${data.message}`)
    })

    //Connection in the user
    socket.on('user-connected', name =>{
        appendMessage(`${name} conectado`)
    })

    //Disconnected in the user
    socket.on('user-disconnected', name =>{
        appendMessage(`${name} desconectado`)
    })

    //Sending Information and delete the content of the input
    messageForm.addEventListener('submit', e =>{
        e.preventDefault()
        const message = messageInput.value 
        appendMessage(`Tu : ${message}`)
        socket.emit('send-chat-message', message)
        messageInput.value= ''
    })

    // Function that insert the information in the chat
    function appendMessage(message){
        const messageElement        = document.createElement("div")
        messageElement.innerText    = message
        messageContainer.append(messageElement)

    }



