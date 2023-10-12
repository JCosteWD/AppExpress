const GroupModel = require("../../models/group.model")

module.exports.getGroups = async (req, res) => {
  const groups = await GroupModel.find()
  if(!groups){
    const msg = "Aucunes données trouvées"
    res.status(400).json({ msg })
  }
  const msg = "Voici les dépôts récupérés"
  res.status(200).json({ msg, groups })
}