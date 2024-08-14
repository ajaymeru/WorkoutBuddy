const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/workoutbuddy")
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        console.log(err.message);
    })

// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/workoutbuddy", {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true
//         });
//         console.log("Connected to MongoDB");
//     } catch (err) {
//         console.error("Error connecting to MongoDB:", err.message);
//     }
// };

// connectDB();
