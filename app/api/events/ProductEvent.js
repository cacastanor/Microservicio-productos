const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductEvent = new Schema({
  type: { type: String, default: "" },
  id: {type: Number},
  timestamp: { type: Date, default: Date.now },
  data: { type: Schema.Types.Mixed, default: {} }
});

module.exports = mongoose.model("ProductEvent", ProductEvent);