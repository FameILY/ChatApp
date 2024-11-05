const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const router = require("./router");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow React app to connect
    methods: ["GET", "POST"],
  },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);

server.listen(8000, () => {
  console.log("CONNECTED AT 8000 NIGAA!");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // Broadcasting message to all connected clients
    console.log("message: " + msg);
  });
  socket.on("disconnect", () => {
    console.log("this guy left");
  });
});

module.exports = app;
