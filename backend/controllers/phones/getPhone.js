const PhoneModel = require("../../models/phone.model")

module.exports.getPhone = async (req, res) => {
  const phones = await PhoneModel.find()
  if(!phones){
    const msg = "Aucunes données trouvées"
    res.status(400).json({ msg })
  }
  const msg = "Voici les dépôts récupérés"
  res.status(200).json({ msg, phones })
}