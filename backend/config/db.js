const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false)
    mongoose.connect(process.env.MONGODB_URL, () =>
      console.log("Connexion à la base de donnée MongoDB OK !")
    );
  } catch (err) {
    console.log(err)
    process.exit()
  }
}

module.exports = connectDB