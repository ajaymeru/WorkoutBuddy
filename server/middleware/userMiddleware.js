const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const authUser = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "Auth token required" })
    }
    // Bearer
    const token = authorization.split(" ")[1];
    // console.log(token)

    try {
        // Verify token

        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(_id);
        req.user = await User.findOne({ _id }).select("_id");

        if (!req.user) {
            return res.status(401).json({ error: "User not found" });
        }
        next();

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}

module.exports = authUser