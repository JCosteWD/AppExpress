const VehicleModel = require("../../models/vehicle.model")

module.exports.getVehicles = async (req, res) => {
  const vehicles = await VehicleModel.find()
  if(!vehicles){
    const msg = "Aucunes données trouvées"
    res.status(400).json({ msg })
  }
  const msg = "Voici les dépôts récupérés"
  res.status(200).json({ msg, vehicles })
}