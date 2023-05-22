const UserModel = require("../../models/user.model")

module.exports.getUsers = async (req, res) => {
    const users = await UserModel.find()
    if(!users){
      const msg = "Aucunes données trouvées"
      res.status(400).json({ msg })
    }
    const msg = "Voici les utilisateurs récupérés"
    res.status(200).json({ msg, data: users })
  }