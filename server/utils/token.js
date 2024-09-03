const jwt = require("jsonwebtoken")
require('dotenv').config();

const createtoken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
}

module.exports = createtoken