const mongoose = require("mongoose")

const addPhoneSchema = mongoose.Schema(
  {
    marque: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    }
  },
    {
      timestamps: true
    }
  
);

module.exports = mongoose.model("phone", addPhoneSchema)