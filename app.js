"use strict";

const express = require("express");
const appConfig = require("config").get("app");
const logger = require("@open-age/logger")("server");
const Http = require("http");
const port = 8001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var server = Http.createServer(app);

const boot = async () => {
  const log = logger.start("app:boot");
  log.info(`environment:  ${process.env.NODE_ENV}`);
  log.info("starting server");
  server.listen(port, () => {
    log.info(`listening on port: ${port}`);
    log.end();
  });
};

const init = async () => {
  await require("./settings/database").configure(logger);
  await require("./settings/express").configure(app, logger);
  await require("./settings/routes").configure(app, logger);
  app.get("/chat", function (req, res) {
    res.sendFile(__dirname + "/templates/index.html");
  });

  boot();
};

init();
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: "*",
});

io.on("connection", function (socket) {
  console.log("socket", socket);
});
