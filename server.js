const io    = require('socket.io')(3000)
const users  = {}
io.on('connection', socket => {

    // New User
    socket.on('new-user', name =>{
        users[socket.io] = name
        socket.broadcast.emit('user-connected', name)
    })

    socket.on('send-chat-message', message=>{
        socket.broadcast.emit('chat-message', message)
    })
})
