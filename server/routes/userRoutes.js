const express = require("express")

const router = express.Router()

const { loginUser, signupUser } = require("../controllers/userControllers")

// LOGIN USER
router.post("/login", loginUser)

// SIGN-UP USER
router.post("/signup", signupUser)


module.exports = router;