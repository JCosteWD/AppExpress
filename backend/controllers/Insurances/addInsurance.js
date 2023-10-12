const InsuranceModel = require("../../models/insurance.model")

module.exports.addInsurance = async (req, res) => {
  if (!req.body.startDate || !req.body.endDate ) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const insurance = await InsuranceModel.create({
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  })

  const msg = "Assurance correctement ajouté"
  res.status(200).json({ msg, insurance })
}