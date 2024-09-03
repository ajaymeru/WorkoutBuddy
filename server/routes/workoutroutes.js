const express = require("express")

const authUser = require("../middleware/userMiddleware")

const router = express.Router()

// REQUIRE CONTROLLER FROM workoutControllers 
const { getworkouts, getworkout, createWorkout, editworkout, deleteworkout } = require("../controllers/workoutControllers")

// Middleware
router.use(authUser)

// GET ENTIRE DATA
router.get("/", getworkouts)

// GET SINGLE RECORD
router.get("/:id", getworkout)

// CREATE REACORD
router.post("/", createWorkout)

// UPADATE RECORD
router.patch("/:id", editworkout)

// DELETE RECORD
router.delete("/:id", deleteworkout)

module.exports = router