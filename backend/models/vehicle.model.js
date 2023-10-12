const mongoose = require("mongoose")

const addVehicleSchema = mongoose.Schema(
  {
    marque: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    numberPlate: {
      type: String,
      required: true
    }
  },
    {
      timestamps: true
    }
  
);

module.exports = mongoose.model("vehicle", addVehicleSchema)