const TourModel = require("../../models/tour.model")

module.exports.getToursForDepot = async (req, res) => {
  try {
    const { depotId } = req.params
    console.log("Received depotId:", depotId)

    const tours = await TourModel.find({ depotId: depotId })
    console.log("Found tours:", tours)

    const msg = "Voici les tournées récupérées"
    return res.status(200).json({ msg, tours })
  } catch (error) {
    console.error("Error in getToursForDepot:", error)
    return res.status(500).json({ msg: "Erreur serveur" })
  }
}