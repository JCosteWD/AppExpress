const TourModel = require("../../models/tour.model")

module.exports.getTours = async (req, res) => {
  const tours = await TourModel.find()
  if(!tours){
    const msg = "Aucunes données trouvées"
    res.status(400).json({ msg })
  }
  const msg = "Voici les tournées récupérées"
  res.status(200).json({ msg, tours })
}