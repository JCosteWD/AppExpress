const mongoose = require("mongoose")

const addGroupSchema = mongoose.Schema(
  {
    depot: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("group", addGroupSchema)