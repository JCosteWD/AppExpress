/* const TourModel = require("../../models/tour.model")

module.exports.getTour = async (req, res) => {
    const tour = await TourModel.findById(req.params.id)
    
    if (!tour) {
      const msg = "Cette donnée n'existe pas"
      res.status(400).json({ msg })
    }
    const msg = "Voici la donnée demandée"
    res.status(200).json({msg, tour})
  } */

  const TourModel = require("../../models/tour.model")

module.exports.getTour = async (req, res) => {
  const { depotId } = req.params;

  try {
    const tours = await TourModel.find({ depot: depotId });

    if (tours.length === 0) {
      const msg = "Aucunes données trouvées pour le dépôt spécifié";
      res.status(400).json({ msg });
    } else {
      const msg = "Voici les tournées récupérées pour le dépôt spécifié";
      res.status(200).json({ msg, tours });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur serveur lors de la récupération des tournées" });
  }
  }