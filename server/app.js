const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    console.log("New client connected");
    setInterval(() => {
        socket.emit('seconds.update', {
            time: new Date()
        })
    }, 1000);
    socket.on("disconnect", () => console.log("Client disconnected"));
})

server.listen(port, () => console.log(`Listening on port ${port}`));
