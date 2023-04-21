"use strict";

const fs = require("fs");
const api = require("../api");
const specs = require("../specs");
const permit = require("../permit");
const validator = require("../validators");

const configure = (app, logger) => {
  const log = logger.start("settings:routes:configure");
  app.get("/specs", function (req, res) {
    fs.readFile("./public/specs.html", function (err, data) {
      if (err) {
        return res.json({
          isSuccess: false,
          error: err.toString(),
        });
      }
      res.contentType("text/html");
      res.send(data);
    });
  });

  app.get("/api/specs", function (req, res) {
    res.contentType("application/json");
    res.send(specs.get());
  });

  //user api's routes //
  //   -- USER --- //
  app.post(
    "/api/users/create",
    permit.context.builder,
    validator.users.create,
    api.users.create
  );

  app.post(
    "/api/users/login",
    permit.context.builder,
    validator.users.login,
    api.users.login
  );
  app.post("/api/users/logout", permit.context.validateToken, api.users.logout);

  app.put(
    "/api/users/resetPassword/:id",
    permit.context.validateToken,
    validator.users.resetPassword,
    api.users.resetPassword
  );

  app.put(
    "/api/users/profileImageUpload/:id",
    permit.context.builder,
    api.users.uploadProfileImage
  );

  app.put(
    "/api/users/removeProfilePic/:id",
    permit.context.validateToken,
    api.users.removeProfilePic
  );

  app.delete(
    "/api/users/deleteAccount/:id",
    permit.context.validateToken,
    api.users.remove
  );

  app.get(
    "/api/users/getUsers",
    permit.context.validateToken,
    api.users.getUsers
  );
  app.get(
    "/api/users/userByUsername",
    permit.context.builder,
    api.users.userByUsername
  );

  //   -- FOLLOW REQ --- //
  app.post(
    "/api/followRequest/create",
    permit.context.builder,
    api.followRequest.create
  );

  //   -- EXTRA REQ --- //
  app.post(
    "/api/extra/saveReservation",
    permit.context.builder,
    api.extra.saveReservation
  );
  app.get(
    "/api/extra/getReservations",
    permit.context.builder,
    api.extra.getReservations
  );
  app.delete(
    "/api/extra/deleteAllReservations",
    permit.context.builder,
    api.extra.deleteAllReservations
  );
  app.delete(
    "/api/extra/deleteReservation/:id",
    permit.context.builder,
    api.extra.deleteReservation
  );

  log.end();
};

exports.configure = configure;
