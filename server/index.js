const express = require("express")
const app = express()
const cors = require("cors")

// DB CONNECTION
require("./db/connection")

// REQUIRE ROUTING
const workoutRoutes = require("./routes/workoutroutes")

// MIDDLEWARE 
app.use(express.json())

app.use(cors());



app.get("/", (req, res) => {
    res.send("hello")
})

// ROUTTES
app.use("/api/workouts", workoutRoutes)

// CONNECTING TO PORT
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`conncted to http://localhost:${port}/`);
})