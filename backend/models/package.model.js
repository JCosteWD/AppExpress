const mongoose = require("mongoose")

const addPackageSchema = mongoose.Schema(
  {
    loaded: {
      type: Number,
      required: true
    },
    delivered: {
      type: Number,
      required: true
    },
    returned : {
      type: Number,
      required: true
    },
    other: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("package", addPackageSchema)