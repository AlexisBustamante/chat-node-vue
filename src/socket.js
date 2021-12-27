module.exports = (http) => { 
    const io = require('socket.io')(http);

    io.on('connection', (socket) => { 
        //console.log("User connected");
        socket.on('chat-message', (msg) => { 
            io.emit('chat-message', msg);
        })

        socket.on('disconnect', (msg) => {
            console.log("User disconnected.");
        })
    })

}