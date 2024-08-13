const express = require("express")

const Workout = require("../models/workoutmodel")

const router = express.Router()

// REQUIRE CONTROLLER
const { getworkouts, getworkout, createWorkout, editworkout, deleteworkout } = require("../controllers/workoutControllers")


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