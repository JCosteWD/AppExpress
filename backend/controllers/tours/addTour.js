/* const TourModel = require("../../models/tour.model")

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
} */

/* const TourModel = require("../../models/tour.model");
const GroupModel = require("../../models/group.model")

module.exports.addTour = async (req, res) => {
  try {
    if (!req.body.depot || !req.body.tournee) {
      const msg = "Merci de compléter votre demande d'ajout";
      res.status(400).json({ msg });
      return;
    }


    const depot = await GroupModel.findOne({ depot: req.body.depot });

    if (!depot) {
      const msg = "Le dépôt spécifié n'existe pas.";
      res.status(400).json({ msg });
      return;
    }

    const tour = await TourModel.create({
      depot: depot._id,  
      tournee: req.body.tournee,
    });

    const msg = "Donnée correctement ajoutée";
    res.status(200).json({ msg, tour });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Une erreur est survenue lors de l'ajout de la tournée." });
  }
}; */

/* const TourModel = require("../../models/tour.model");

module.exports.addTour = async (req, res) => {
  try {
    if ( !req.body.depot || !req.body.tournee) {
      const msg = "Merci de compléter votre demande d'ajout";
      return res.status(400).json({ msg });
    }

    const tour = await TourModel.create({
      depot: req.body.depot,
      depotId: req.body.depotId,
      tournee: req.body.tournee,
    });

    const msg = "Donnée correctement ajoutée";
    return res.status(200).json({ msg, tour });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, msg: "Erreur serveur", details: error.message });
  }
};
 */

const TourModel = require("../../models/tour.model")

module.exports.addTour = async (req, res) => {
  if (!req.body.depot || !req.body.tournee) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const tour = await TourModel.create({
    depot: req.body.depot,
    depotId: req.body.depotId,
    tournee: req.body.tournee
  })

  const msg = "Donnée correctement ajoutée"
  res.status(200).json({ msg, tour })
}