const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const bossSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  authTokens: [{
    authToken: {
      type: String,
      required: true
    }
  }]
})

bossSchema.methods.generateAuthTokenAndSaveBoss = async function() {
  const authToken = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: '1h'  } )
  this.authTokens.push({ authToken })
  await this.save()
  return authToken
}

bossSchema.statics.findUser = async(username, password) => {
  const boss = await Boss.findOne({ username })
  if (!boss) throw new Error('Erreur, connexion impossible!')
  const isPasswordValid = await bcrypt.compare(password, boss.password)
  if (!isPasswordValid) throw new Error('Erreur, connexion impossible!')
  return boss
}

bossSchema.methods.removeAuthToken = async function(token) {
  const boss = this
  const index = boss.authTokens.findIndex((authToken) => authToken.authToken === token)
  if (index === -1) {
    throw new Error('Jetons d\'accès introuvable')
  }
  boss.authTokens.splice(index, 1)
  await boss.save()
boss.removeAuthToken('mon-jeton-d-authentification')
}



const Boss = mongoose.model("boss", bossSchema)

module.exports = Boss