const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
