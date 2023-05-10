"use strict";
const mongoose = require("mongoose");
const room = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["ONE2ONE", "GROUP"],
      default: "ONE2ONE",
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

mongoose.model("room", room);
module.exports = room;
