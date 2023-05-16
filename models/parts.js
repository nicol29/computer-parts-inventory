const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartsSchema = new Schema ({
  manufacturer: { type: Schema.Types.ObjectId, ref: "Manufacturers", required: true },
  part: { type: String, required: true },
  platform: { type: String },
  description: { type: String }
});

module.exports = mongoose.model("Parts", PartsSchema);
