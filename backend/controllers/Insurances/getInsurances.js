const InsuranceModel = require("../../models/insurance.model")

module.exports.getInsurances = async (req, res) => {
  const insurances = await InsuranceModel.find()
  if(!insurances){
    const msg = "Aucunes données trouvées"
    res.status(400).json({ msg })
  }
  const msg = "Voici les assurances récupérés"
  res.status(200).json({ msg, insurances })
}