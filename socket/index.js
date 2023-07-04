"use strict";
const { Server } = require("socket.io");
const roomService = require("./service/room");

console.log(roomService);
const configure = async (server) => {
  try {
    const io = new Server(server, {
      cors: "*",
    });

    //------------ ---------- ---------- ---------- ----------
    //------------ ---------- ---------- ---------- ----------

    io.on("connection", function (socket) {
      console.log("A user connected");

      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });

      socket.on("set-room", (data) => {
        console.log("Message:", data);
        roomService.setRoom(data, socket);
      });

      socket.on("chat message", (msg) => {
        console.log("Message:", msg);
        io.emit("chat message", msg);
      });
    });

    //------------ ---------- ---------- ---------- ----------
    //------------ ---------- ---------- ---------- ----------
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.configure = configure;
