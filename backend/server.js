/* const express = require("express")
const connectDB = require("./config/db")
const cors = require('cors')
const router = express.Router()

const port = process.env.PORT || 7000

connectDB()

const app = express()

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use("/", require("./routes/routes"))

app.listen(port, () => console.log(`Le serveur est démarré sur le port ${port}.`))
 */

const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const router = express.Router();

const port = process.env.PORT || 7000;

connectDB();

const app = express();

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use("/", require("./routes/routes"));

app.listen(port, () => console.log(`Le serveur est démarré sur le port ${port}.`));