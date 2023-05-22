const bcrypt = require('bcryptjs')
const BossModel = require('../../models/boss.model')

module.exports.addBoss = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    const msg = "Merci de compléter votre demande d'ajout"
    res.status(400).json({ msg })
    return
  }

  const existingBoss = await BossModel.findOne({ username: req.body.username })
  if (existingBoss) {
    const msg = "Cet utilisateur existe déjà"
    res.status(400).json({ msg })
    return;
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10)

  const boss = await BossModel.create({
    username: req.body.username,
    password: hashedPassword
  });

  const msg = "Donnée correctement ajoutée"
  res.status(200).json({ msg, boss })
}