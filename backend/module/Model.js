import mongoose from "mongoose";

function validator(body) {
    if (!body || !body.substr(body.length - 4, body.length - 1).includes('!!!'))
        return false;

    for (let i = 0; i < body.length; i++) {
        if (body[i] >= 'a' && body[i] <= 'z')
            return false;
    }
    
    return true;
}

const postSchema = new mongoose.Schema({
    subject: { type: String },
    body: { type: String, validate: [validator, 'not yelling enough']},
    user: { type: String },
    comments: [],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Post", postSchema)
