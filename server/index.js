const express = require("express")
const app = express()
const cors = require("cors")

// DB CONNECTION
require("./db/connection")

// REQUIRE ROUTING
const workoutRoutes = require("./routes/workoutroutes")

// JSON middleware for incoming req & storing in req.body
app.use(express.json())

// Middleware to enable CORS, allowing your API to be accessed from different domains
app.use(cors());


app.get("/", (req, res) => {
    res.send("hello")
})

// ROUTTES
// Defining a route for the /api/workouts endpoint, using the imported workout routes
app.use("/api/workouts", workoutRoutes)

// CONNECTING TO PORT
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`conncted to http://localhost:${port}/`);
})