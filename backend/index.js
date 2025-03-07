import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./db.js"
// import userRoutes from './routes/userRoutes.js'
// import postRoutes from './routes/postRoutes.js';
import Post from './models/Post.js';
// import User from './models/User.js';

connectDB()

const app = express()
const port = 8080

app.use(express.json())
app.use(cors())

app.get('/api/users', userRoutes)
app.get('/api/users', postRoutes)

app.listen(port, ()=> {
    console.log(`connected ${port}`)
})


