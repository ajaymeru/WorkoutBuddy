const User = require("../models/userModel")
const createtoken = require("../utils/token")

// LOGIN USER
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        // create token
        const token = createtoken(user._id);
        res.status(200).json({ email, password, token })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}



// SIGN-UP USER
const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);

        // create token
        const token = createtoken(user._id)
        console.log(token);
        res.status(200).json({ email, password, token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }

}

module.exports = {
    loginUser,
    signupUser
}