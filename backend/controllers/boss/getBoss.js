const BossModel = require("../../models/boss.model")

module.exports.getBoss = async (req, res) => {
  try {
    const boss = await BossModel.find()
    res.status(200).json({ data: boss })
  } catch (err) {
    console.error(err.message)
    res.status(400).json({ msg: "Server Error" })
  }
}