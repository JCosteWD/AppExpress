/* const TourModel = require("../../models/tour.model")

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
  } */

  const fs = require('fs');

  const logFile = 'C:/Users/Guizmoju/Desktop/JCWD/appexpress/backend/log/log.txt';

  const log = (message) => {
    fs.appendFileSync(logFile, `${message}\n`);
  };

  const TourModel = require("../../models/tour.model")

  log('Server started');

  module.exports.getToursForDepot = async (req, res) => {
    console.log('Full request object:', req);
    const { depotId } = req.query;
    console.log('Depot ID from request:', depotId);
  
    try {
      let tours;
  
      if (depotId) {
        tours = await TourModel.find({ depot: depotId });
        console.log('Filtered tours by depotId:', tours);
      } else {
        tours = await TourModel.find();
      }

      console.log('Tours:', tours);
  
      if (!tours || tours.length === 0) {
        const msg = depotId
          ? "Aucunes données trouvées pour ce dépôt"
          : "Aucunes données trouvées pour tous les dépôts";
  
        res.status(404).json({ msg });
        return;
      }
  
      const msg = depotId
        ? "Voici les tournées récupérées pour ce dépôt"
        : "Voici toutes les tournées récupérées";
  
      res.status(200).json({ msg, tours });
    } catch (error) {
      console.error(error);
      const msg = depotId
        ? "Une erreur s'est produite lors de la récupération des tournées pour ce dépôt"
        : "Une erreur s'est produite lors de la récupération de toutes les tournées";
      res.status(500).json({ msg });
    }
  };