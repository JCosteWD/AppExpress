const UserModel = require("../../models/user.model")

module.exports.getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id)
    
    if (!user) {
      const msg = "Cette donnée n'existe pas"
      res.status(400).json({ msg })
    }
    const msg = "Voici la donnée demandée"
    res.status(200).json({msg, user})
  }