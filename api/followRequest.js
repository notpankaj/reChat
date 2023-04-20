"use strict";
const service = require("../services/followRequest");
const response = require("../exchange/response");
//create Follow Req
const create = async (req, res) => {
  const log = req.context.logger.start(`api:followReq:create`);
  try {
    const followReq = await service.create(req.body, req.context);
    const message = "Follow Request Created Successfully";
    log.end();
    return response.success(res, message, followReq);
  } catch (err) {
    log.error(err);
    log.end();
    return response.failure(res, err.message);
  }
};

exports.create = create;
