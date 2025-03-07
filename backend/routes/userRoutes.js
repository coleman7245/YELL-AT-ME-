const express = require('express')
import User from "../models/User.js";
const jwt = require('jsonwebtoken')
import authenticateUser from '../middleware/auth'
const router = express.Router()

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })

router.post("/register", async (req, res) => {
    const { name, email, password} = req.body;

    if (await User.findOne({ email })) {
        return res.status(400).json({ message: 'user already exists' })
    }

    const user = await User.create({ name, email, password })

    if (!user) return res.status(400).json({ message: 'Invalid user data' })
    
        res.status(201).json({ _id: user.id, name, email, token: generateToken(user.id) });
})

router.post("/login", async (req, res) => {
    const { email, password} = req.body;

    if (!user || !(await user.matchPassword(password))) {
        return res.status(400).json({ message: 'Invalid credentials' })
    }

    res.status(201).json({ _id: user.name, email, token: generateToken(user.id) });
})

router.get("/profile", authenticateUser, (req, res) => {
    res.json(req.user)
})

export default router