const mongoose = require("mongoose")

const addInsuranceSchema = mongoose.Schema(
  {
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    }
  },
    {
      timestamps: true
    }
  
);

module.exports = mongoose.model("insurance", addInsuranceSchema)