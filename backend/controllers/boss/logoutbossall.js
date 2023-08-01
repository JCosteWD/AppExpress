module.exports.LogoutBossAll = async (req, res) => {
  try {
    req.boss.authTokens = []
    await req.boss.save()
    res.send()
  } catch (e) {
    res.status(500).send()
    console.log(e)
  }
}