import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", ()=>{
    console.log("Connected with server", socket.id);
    socket.emit("message", "Hello");
})

socket.on("message", (msg)=>{
    console.log(msg);
})

