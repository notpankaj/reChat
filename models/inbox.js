"use strict";
const mongoose = require("mongoose");
const inbox = mongoose.Schema(
  {
    password: { type: String, required: false },
  },
  { timestamps: true }
);

mongoose.model("inbox", inbox);
module.exports = inbox;
