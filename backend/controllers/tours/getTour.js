const TourModel = require("../../models/tour.model")

module.exports.getTour = async (req, res) => {
    const tour = await TourModel.findById(req.params.id)
    
    if (!tour) {
      const msg = "Cette donnée n'existe pas"
      res.status(400).json({ msg })
    }
    const msg = "Voici la donnée demandée"
    res.status(200).json({msg, tour})
  }