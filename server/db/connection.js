const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/workoutbuddy")
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        console.log(err.message);
    })