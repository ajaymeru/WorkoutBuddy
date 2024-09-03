const Workout = require("../models/workoutmodel")

// GET ALL DATA 
const getworkouts = async (req, res) => {
    const user_id = req.user_id

    try {
        const workoutData = await Workout.find({ user_id }).sort({ createdAt: -1 })
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

// create WORKOUT RECORD
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    const user_id = req.user._id
    try {
        // console.log(user_id);
        const newWorkout = new Workout({ title, reps, load, user_id });
        const workout = await newWorkout.save();
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
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