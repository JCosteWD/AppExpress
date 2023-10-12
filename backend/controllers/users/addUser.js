const UserModel = require("../../models/user.model")

module.exports.addUser = async (req, res) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.phone || !req.body.address1 || !req.body.address2 ) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const user = await UserModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address1: req.body.address1,
    address2: req.body.address2
  })

  const msg = "Donnée correctement ajoutée"
  res.status(200).json({ msg, user })
}