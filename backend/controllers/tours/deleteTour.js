const TourModel = require("../../models/tour.model")

module.exports.deleteTour = async (req, res) => {
    const tour = await TourModel.findById(req.params.id)

    if (!tour) {
      const msg = "Cette donnée n'existe pas"
      res.status(400).json({ msg })
    }
    await tour.remove()
    const msg = "Donnée correctement supprimée"
    const id = req.params.id
    res.status(200).json({ msg, id })
  }