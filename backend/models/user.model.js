const mongoose = require("mongoose")

const addUserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("user", addUserSchema)