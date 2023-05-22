/* const BossModel = require("../../models/boss.model")
const express = require('express')
const router = express.Router()


module.exports.loginBoss = async (req, res) => {
  try {
    const boss = await BossModel.findUser(req.body.username, req.body.password)
    const authToken = await boss.generateAuthTokenAndSaveBoss()
    res.send({ boss, authToken })
  } catch (e) {
    res.status(400).json({ msg: "Problème lors de la connexion" })
  }
} */

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const BossModel = require('../../models/boss.model');

module.exports.loginBoss = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    const msg = "Merci de compléter votre demande d'authentification";
    res.status(400).json({ msg });
    return;
  }

  const boss = await BossModel.findOne({ username: req.body.username });
  if (!boss) {
    const msg = "Nom d'utilisateur incorrect";
    res.status(400).json({ msg });
    return;
  }

  const isPasswordValid = await bcrypt.compare(req.body.password, boss.password);
  if (!isPasswordValid) {
    const msg = "Mot de passe incorrect";
    res.status(400).json({ msg });
    return;
  }

  // Authentification réussie, création du token JWT
  const token = jwt.sign({ userId: boss._id }, 'votre_clé_secrète');
  
  const msg = "Authentification réussie";
  res.status(200).json({ msg, token });
};