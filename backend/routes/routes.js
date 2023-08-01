const express = require('express')
const router = express.Router()
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const BossModel = require("../models/boss.model")

const authentificationBoss = require('../controllers/auth/auth')

const { getTours } = require('../controllers/tours/getTours')
const { getUsers } = require('../controllers/users/getUsers')
const { getTour } = require('../controllers/tours/getTour')
const { getUser } = require('../controllers/users/getUser')
const { getBoss } = require('../controllers/boss/getBoss')
const { loginBoss } = require('../controllers/boss/loginBoss')
const { LogoutBoss } = require('../controllers/boss/logoutBoss')
const { LogoutBossAll } = require('../controllers/boss/logoutbossall')
const { addTour } = require('../controllers/tours/addTour')
const { addUser } = require('../controllers/users/addUser')
const { addBoss } = require('../controllers/boss/addBoss')
const { updateTour } = require('../controllers/tours/updateTour')
const { updateUser } = require('../controllers/users/updateUser')
const { deleteTour } = require('../controllers/tours/deleteTour')
const { deleteUser } = require('../controllers/users/deleteUser')

const { addPackage } = require('../controllers/mobile/package/returnFromTour')

router.get("/tours", getTours)
router.get("/users", getUsers)
router.get("/tour/:id", getTour)
router.get("/user/:id", getUser)
router.get("/boss", getBoss)
router.post("/loginboss", loginBoss)
router.post("/logoutboss", authentificationBoss, LogoutBoss)
router.post("/logoutboss/all", authentificationBoss, LogoutBossAll)
router.post("/addtour", addTour)
router.post("/adduser", addUser)
router.post("/addboss", addBoss)
router.put("/updatetour/:id", updateTour)
router.put("/updateuser/:id", updateUser)
router.delete("/deletetour/:id", deleteTour)
router.delete("/deleteuser/:id", deleteUser)

router.post("/addPackage", addPackage)

module.exports = router 