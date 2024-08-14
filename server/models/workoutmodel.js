const mongoose = require("mongoose")

// SCHEMA FOR MODEL 
const workoutSchema = mongoose.Schema({
    titile: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: String,
        required: true,
    }
},
    {
        timelapse: true
    })

// CREATE MODEL FROM SCHEMA & "Workout" is collection name for DB
const Workout = mongoose.model("Workout", workoutSchema)

// EXPORT MODULE
module.exports = Workout;
