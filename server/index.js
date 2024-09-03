require("dotenv").config();

const express = require("express")
const app = express()
const cors = require("cors")

// DB CONNECTION    
require("./db/connection")

// REQUIRE ROUTING
// routes to basic crud
const workoutRoutes = require("./routes/workoutroutes")
// routes to signup-login
const userRoutes = require("./routes/userRoutes")

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
app.use("/api/user", userRoutes)

// CONNECTING TO PORT
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`conncted to http://localhost:${port}/`);
})