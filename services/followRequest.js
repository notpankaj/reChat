const create = async (model, context) => {
  const log = context.logger.start("services:followRequest:create");
  const { from, to, message } = model;

  const isAlreadyRequested = db.followRequest.findOne({
    $and: [{ from: to }, { to: to }],
  });
  const isAlreadyRequested2 = db.followRequest.findOne({
    $and: [{ from: to }, { to: from }],
  });
  if (isAlreadyRequested) {
    throw new Error("already pending request");
  }
  if (isAlreadyRequested2) {
    throw new Error("already pending request");
  }

  const followReq = await new db.followRequest({
    from,
    to,
    message,
  }).save();
  log.end();
  return followReq;
};

exports.create = create;
