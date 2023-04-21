"use strict";
const service = require("../services/extra");
const response = require("../exchange/response");
//saveReservation
const saveReservation = async (req, res) => {
  const log = req.context.logger.start(`api:saveReservation:create`);
  try {
    const saveReq = await service.saveReservation(req.body, req.context);
    const message = "Reservation Saved Created Successfully";
    log.end();
    return response.success(res, message, saveReq);
  } catch (err) {
    log.error(err);
    log.end();
    return response.failure(res, err.message);
  }
};

const getReservations = async (req, res) => {
  const log = req.context.logger.start(`api:saveReservation:create`);
  try {
    const data = await service.getReservations(req.context);
    const message = "Reservation Get Successfully";
    log.end();
    return response.success(res, message, data);
  } catch (err) {
    log.error(err);
    log.end();
    return response.failure(res, err.message);
  }
};

const deleteReservation = async (req, res) => {
  const log = req.context.logger.start(`api:deleteReservation${req.params.id}`);
  try {
    const data = await service.deleteReservation(req.params.id, req.context);
    log.end();
    return response.data(res, data);
  } catch (err) {
    log.error(err);
    log.end();
    return response.failure(res, err.message);
  }
};

const deleteAllReservations = async (req, res) => {
  const log = req.context.logger.start(`api:deleteAllReservations`);
  try {
    const data = await service.deleteAllReservations(req.context);
    log.end();
    return response.data(res, data);
  } catch (err) {
    log.error(err);
    log.end();
    return response.failure(res, err.message);
  }
};

exports.saveReservation = saveReservation;
exports.getReservations = getReservations;
exports.deleteReservation = deleteReservation;
exports.deleteAllReservations = deleteAllReservations;
