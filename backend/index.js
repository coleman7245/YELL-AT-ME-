import express, { application } from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./db.js"
import userRoutes from "./routes/userRoutes"
import postRoutes from "./routes/postRoutes"

dotenv.config()

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


