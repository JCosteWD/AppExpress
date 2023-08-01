const PackageModel = require("../../../models/package.model")

module.exports.addPackage = async (req, res) => {
  if (!req.body.loaded) {
    const msg = "Merci de compléter votre retour de tournée"
    res.status(400).json({ msg })
    return
  }

  const package  = await PackageModel.create({
    loaded: req.body.loaded,
    delivered: req.body.delivered,
    returned: req.body.returned,
    other: req.body.other
  })

  const msg = "Données correctement envoyées"
  res.status(200).json({ msg, package })
}