const VehicleModel = require("../../models/vehicle.model")

module.exports.addVehicle = async (req, res) => {
  if (!req.body.marque || !req.body.model || !req.body.numberPlate) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const vehicle = await VehicleModel.create({
    marque: req.body.marque,
    model: req.body.model,
    numberPlate: req.body.numberPlate
  })

  const msg = "Véhicule correctement ajouté"
  res.status(200).json({ msg, vehicle })
}