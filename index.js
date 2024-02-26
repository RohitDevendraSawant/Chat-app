import { Server } from 'socket.io';
import http from 'http';

const PORT = 3000;

const server = http.createServer();


start = false



const io = new Server(server);

io.on('connection', (socket)=>{
    console.log("Client connected.");

    socket.on("message", (msg)=>{
        console.log("Received message from clinet:", msg);
        io.emit("message", "Message recieved");
    })
});

server.listen(PORT, ()=>{
    console.log("Server running at http://localhost:"+PORT);
})