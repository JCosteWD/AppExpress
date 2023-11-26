const mongoose = require("mongoose")

const addTourSchema = mongoose.Schema(
  {
    depot: {
      type: String,
      required: true
    },
    depotId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      required: true,
    },
    tournee: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("tour", addTourSchema)