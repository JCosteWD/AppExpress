const UserModel = require("../../models/user.model")

module.exports.deleteUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id)

    if (!user) {
      const msg = "Cette donnée n'existe pas"
      res.status(400).json({ msg })
    }
    await user.remove()
    const msg = "Donnée correctement supprimée"
    const id = req.params.id
    res.status(200).json({ msg, id })
  }