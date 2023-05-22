const TourModel = require("../../models/tour.model")

module.exports.addTour = async (req, res) => {
  if (!req.body.depot || !req.body.tournee) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const tour = await TourModel.create({
    depot: req.body.depot,
    tournee: req.body.tournee
  })

  const msg = "Donnée correctement ajoutée"
  res.status(200).json({ msg, tour })
}