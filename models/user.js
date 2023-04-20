"use strict";
const mongoose = require("mongoose");
const user = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: false },
  },
  { timestamps: true }
);

user.index({ location: "2dsphere" });
mongoose.model("user", user);
module.exports = user;
