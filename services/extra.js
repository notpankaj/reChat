const { json } = require("express");

const saveReservation = async (model, context) => {
  const log = context.logger.start("services:saveReservation:create");

  const res = await new db.extra({
    reservation: JSON.stringify(model.reservation),
  }).save();
  log.end();
  return res;
};

const getReservations = async (context) => {
  const log = context.logger.start(`services:getReservations`);
  const extra = await db.extra.find();
  log.end();
  return extra;
};
const deleteReservation = async (id, context) => {
  const log = context.logger.start(`services:deleteReservation: ${id}`);
  const extra = await db.extra.deleteOne({ _id: id });
  log.end();
  return extra;
};
const deleteAllReservations = async (context) => {
  const log = context.logger.start(`services:deleteAllReservations`);
  const extra = await db.extra.remove({});
  log.end();
  return extra;
};

exports.saveReservation = saveReservation;
exports.getReservations = getReservations;
exports.deleteReservation = deleteReservation;
exports.deleteAllReservations = deleteAllReservations;
