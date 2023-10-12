const PhoneModel = require("../../models/phone.model")

module.exports.addPhone = async (req, res) => {
  if (!req.body.marque || !req.body.model || !req.body.phoneNumber) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const phone = await PhoneModel.create({
    marque: req.body.marque,
    model: req.body.model,
    phoneNumber: req.body.phoneNumber
  })

  const msg = "Téléphone correctement ajouté"
  res.status(200).json({ msg, phone })
}