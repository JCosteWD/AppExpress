module.exports.LogoutBoss = async (req, res) => {
  try {
    req.boss.authTokens = req.boss.authTokens.filter((authToken) => {
      return authToken.authToken !== req.authToken
   })
   await req.boss.save()
   res.send("Vous êtes bien déconnécté !")
  } catch (e) {
    res.status(500).send()
    console.log(e)
  }
}