/* const BossModel = require("../../models/boss.model");
const jwt = require('jsonwebtoken')

const authentificationBoss = async(req, res, next) => {
  try {
    const authToken = req.header('Authorization').replace('Bearer ', '')
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET)
    const boss = await BossModel.findOne({ _id: decodedToken._id, 'authTokens.authToken': authToken })

    if(!boss) throw new Error()

    req.authToken = authToken
    req.boss = boss
    next()
  }catch(e) {
    res.status(401).send('Merci de vous authentifier')
  }
}

module.exports = authentificationBoss */

/* const BossModel = require("../../models/boss.model");
const jwt = require('jsonwebtoken');

const authenticationBoss = async (req, res, next) => {
  try {
    const authToken = req.cookies.authToken; // Lire le token à partir des cookies
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    const boss = await BossModel.findOne({
      _id: decodedToken._id,
      'authTokens.authToken': authToken
    });

    if (!boss) throw new Error();

    req.authToken = authToken;
    req.boss = boss;
    next();
  } catch (e) {
    res.status(401).send('Merci de vous authentifier');
  }
};

module.exports = authenticationBoss; */

const BossModel = require("../../models/boss.model");
const jwt = require('jsonwebtoken');

const authentificationBoss = async (req, res, next) => {
  try {
    const authToken = req.cookies.authToken; // Lire le token à partir des cookies

    if (!authToken) {
      // Si le token est absent, renvoyer une réponse d'erreur
      return res.status(401).send('Merci de vous authentifier');
    }

    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    const boss = await BossModel.findOne({
      _id: decodedToken._id,
      'authTokens.authToken': authToken
    });

    if (!boss) {
      // Si l'utilisateur n'est pas trouvé, renvoyer une réponse d'erreur
      return res.status(401).send('Merci de vous authentifier');
    }

    req.authToken = authToken;
    req.boss = boss;
    next();
  } catch (e) {
    // Gérer les erreurs de décodage ou de vérification du token
    res.status(401).send('Merci de vous authentifier');
  }
};

module.exports = authentificationBoss;