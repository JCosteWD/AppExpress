const BossModel = require("../../models/boss.model")
const jwt = require('jsonwebtoken')

const authentificationBoss = async (req, res, next) => {
  try {
    const authToken = req.cookies.authToken

    if (!authToken) {
      return res.status(401).send('Merci de vous authentifier')
    }

    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET)
    const boss = await BossModel.findOne({
      _id: decodedToken._id,
      'authTokens.authToken': authToken
    })

    if (!boss) {
      return res.status(401).send('Merci de vous authentifier')
    }

    req.authToken = authToken
    req.boss = boss
    next()
  } catch (e) {
    res.status(401).send('Merci de vous authentifier')
  }
}

module.exports = authentificationBoss