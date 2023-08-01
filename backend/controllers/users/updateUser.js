const UserModel = require("../../models/user.model")

module.exports.updateUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id)

  if (!user) {
    const msg = "Cette donnée n'existe pas"
    return res.status(400).json({ msg })
  }

  const updUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  const msg = "Donnée correctement modifiée"
  res.status(200).json({ msg, updUser })
}