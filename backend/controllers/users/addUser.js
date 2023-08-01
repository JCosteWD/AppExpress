const UserModel = require("../../models/user.model")

module.exports.addUser = async (req, res) => {
  if (!req.body.firstname || !req.body.lastname) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const user = await UserModel.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname
  })

  const msg = "Donnée correctement ajoutée"
  res.status(200).json({ msg, user })
}