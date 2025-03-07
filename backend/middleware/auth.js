const jwt = require('jsonwebtoken')
import User from "../models/User.js";

const authenticateUser = async (req, res, next) => {
   const token = req.header("Authorization")

   if (!token) {
    return res.status(401).json({ message: "Not token, authorization denied" })
   }

   try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id).select("-password")
   } catch (error) {
        res.status(401).json({ message: "Invalid token" })
   }
}

export default authenticateUser

