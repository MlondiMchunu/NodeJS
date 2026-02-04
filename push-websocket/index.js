const http = require('http');
const { connection } = require('websocket');
const WebsocketServer = require('websocket').server
let connections = [];

const httpserver = http.createServer()

//pass httpserver object on the WebSocket library
const websocket = new WebsocketServer({"httpServer": httpserver})

//listen on the TCP socket
httpserver.listen(8000, () => console.log("Server is listening on port 8080"))

//when a legit websocket req comes, listen to it and get the connection
websocket.on("request", request => {
    const connection = request.accept(null, request.origin)
    connection.on("message", message => {
        //someone just sent a message, tell everybody
        connections.forEach(c => c.send(`User${connection.socket.remotePort} says: ${message.utf8Data}`))
    })

    connections.push(connection)
    //someone just connected, tell everybody
    connections.forEach(c => c.send(`User${connection.socket} just connected.`))
})

connections.push(connection)
//someone just connected, tell everyone
connections.forEach(c => c.send(`User${connection.socket.remotePort} just connected.`))