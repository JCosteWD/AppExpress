const GroupModel = require("../../models/group.model")

module.exports.addGroup = async (req, res) => {
  if (!req.body.depot) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const group = await GroupModel.create({
    depot: req.body.depot,
  })

  const msg = "Donnée correctement ajoutée"
  res.status(200).json({ msg, group })
}