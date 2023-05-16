const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const manufacturersSchema = new Schema({
  manufacturer: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model("Manufacturers", manufacturersSchema);