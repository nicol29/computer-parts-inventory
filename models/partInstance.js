const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const partInstancesSchema = new Schema({
  part: { type: Schema.Types.ObjectId, ref: "Parts", required: true },
  condition: { type: String, required: true},
  price: { type: Number, required: true },
});

partInstancesSchema.virtual("url").get(function () {
  return `/computer-parts/${this._id}`;
});

module.exports = mongoose.model("PartInstances", partInstancesSchema);