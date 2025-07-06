const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("server running at http://localhost:3000");
});
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("connection");
  socket.on("login", (username) => {
    socket.username = username;
    socket.emit("login", socket.username);
  });
  socket.on("chat message", (msg, username) => {
    socket.emit("reception message", username, msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
