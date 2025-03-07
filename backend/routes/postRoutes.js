const express = require('express')
import Post from "../models/Post.js"
import authenticateUser from '../middleware/auth'
const router = express.Router()


router.post("/", authenticateUser, async (req, res) => {
    const post = await Post.create({ ...req.body, userId: req.user.id })
    res.status(201).json(post)
})

router.get("/", authenticateUser, async (req, res) => {
    const post = await Post.find({ userId: req.user.id })
    res.json(post)
})

router.post("/:id", authenticateUser, async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id, userId: req.user.id })
    post ? res.json(post) : res.status(404).json({ message: 'Post not found'})
})

router.put("/:id", authenticateUser, async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id, userId: req.user.id })
    post ? res.json(post) : res.status(404).json({ message: 'Post not found'})
})

router.delete("/:id", authenticateUser, async (req, res) => {
    const post = await Post.findOneAndDelete({ _id: req.params.id, userId: req.user.id })
    post ? res.json({ message: "Post deleted"}) : res.status(404).json({ message: 'Post not found'})
})

export default router