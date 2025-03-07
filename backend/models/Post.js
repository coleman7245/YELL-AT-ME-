const mongoose = require('mongoose')

function validator(body) {
    if (!body || !body.substr(body.length - 4, body.length - 1).includes('!!!'))
        return false;

    for (let i = 0; i < body.length; i++) {
        if (body[i] >= 'a' && body[i] <= 'z')
            return false;
    }
    
    return true;
}

const postSchema = new mongoose.postSchema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true, validate: [validator, 'not yelling enough']},
   createdAt: { type: String, required: true }
})

export default module("Post", postSchema)