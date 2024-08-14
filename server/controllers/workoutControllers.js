const Workout = require("../models/workoutmodel")

// GET ALL DATA 
const getworkouts = async (req, res) => {
    try {
        const workoutData = await Workout.find().sort({ createdAt: -1 })
        res.status(200).json(workoutData)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// GET SINGLE DATA 
const getworkout = async (req, res) => {
    try {
        const id = req.params.id
        const workoutData = await Workout.findById({ _id: id })
        res.status(200).json(workoutData)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// create WORKOUT RECORD POST
const createWorkout = async (req, res) => {
    try {
        const newWorkot = new Workout(req.body);
        const workout = await newWorkot.save()
        res.status(201).json(workout)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
        console.log(`${err} Error in Creating workout `);
    }
}

// UPDATE WORKOUT
const editworkout = async (req, res) => {
    try {
        const id = req.params.id;
        const workoutData = await Workout.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).json(workoutData)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// DELETE WORKOUT
const deleteworkout = async (req, res) => {
    try {
        const id = req.params.id;
        const workoutData = await Workout.findByIdAndDelete({ _id: id })
        res.status(200).json(workoutData)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// EXPORT DATA 
module.exports = { getworkouts, getworkout, createWorkout, editworkout, deleteworkout }