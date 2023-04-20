"use strict";
const mongoose = require("mongoose");
const followRequest = mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

followRequest.index({ location: "2dsphere" });
mongoose.model("followRequest", followRequest);
module.exports = followRequest;
