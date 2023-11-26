const TourModel = require("../../models/tour.model")
const GroupModel = require("../../models/group.model")

module.exports.addTour = async (req, res) => {
  if (!req.body.depot || !req.body.tournee) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  try {
    const depot = await GroupModel.findOne({ depot: req.body.depot })

    if (!depot) {
      const msg = "Dépôt non trouvé"
      res.status(404).json({ msg })
      return
    }

    const tour = await TourModel.create({
      depot: req.body.depot,
      depotId: depot._id,
      tournee: req.body.tournee
    });

    const msg = "Donnée correctement ajoutée"
    res.status(200).json({ msg, tour })
  } catch (error) {
    console.error(error)
    const msg = "Erreur serveur"
    res.status(500).json({ msg })
  }
}