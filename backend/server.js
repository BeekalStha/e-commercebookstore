import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import bookRouter from "./routes/bookRoute.js"



// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/book",bookRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")

})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
    
})


//mongodb+srv://shresthabikal92:shresthabikal92@cluster0.trp2ye0.mongodb.net/?

//27.34.101.171/32