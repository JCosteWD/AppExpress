const mongoose = require("mongoose")

const addUserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("user", addUserSchema)