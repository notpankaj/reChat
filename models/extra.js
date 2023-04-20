"use strict";
const mongoose = require("mongoose");
const extra = mongoose.Schema(
  {
    reservation: { type: String, default: "" },
  },
  { timestamps: true }
);

mongoose.model("extra", extra);
module.exports = extra;
