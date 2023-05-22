const TourModel = require("../../models/tour.model")

module.exports.updateTour = async (req, res) => {
    const tour = await TourModel.findById(req.params.id)
  
    if (!tour) {
      const msg = "Cette donnée n'existe pas"
      res.status(400).json({ msg })
    }
    const updTour = await TourModel.findByIdAndUpdate(tour, req.body, {
      new: true,
    })
    const msg = "Donnée correctement modifiée"
    res.status(200).json({ msg, updTour })
  }