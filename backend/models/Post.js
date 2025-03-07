const mongoose = require('mongoose')

const postSchema = new mongoose.postSchema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
   createdAt: { type: String, required: true }
})

export default module("Post", postSchema)