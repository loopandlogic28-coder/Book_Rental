import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

import authMiddleware from "./middleware/auth.js"
import rentalRoutes from "./routes/rentalRoute.js"


// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware 
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.use('/api/rentals', rentalRoutes);


app.get("/",(req,res)=>{
   res.send("API Working")
}) //http method using these we can request data from server 

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})//sunning express

// mongodb+srv://chetanmallah28:A3867700@cluster0.29bji4n.mongodb.net/