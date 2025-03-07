import mongoose from 'mongoose';

function validator(body) {
    if (!body || !body.substring(body.length - 4, body.length - 1).includes('!!!'))
        return false;

    for (let i = 0; i < body.length; i++) {
        if (body[i] >= 'a' && body[i] <= 'z')
            return false;
    }
    
    return true;
}

const postSchema = new mongoose.Schema({
    user: { type: String, required: true },
    body: { type: String, required: true },
    comments: { type: Array, required: true},
    exclamations: { type: Number, default: 0 },
    createdAt: { type: String, default: new Date() }
})

export default mongoose.model("Post", postSchema)