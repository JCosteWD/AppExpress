const PackageModel = require("../../../models/package.model")

module.exports.getPackages = async (req, res) => {
    const packages = await PackageModel.find()
    if(!packages){
      const msg = "Aucunes données trouvées"
      res.status(400).json({ msg })
    }
    const msg = "Voici les données colis récupérées"
    res.status(200).json({ msg, data: packages })
  }