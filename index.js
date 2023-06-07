const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/userRoutes");
const { PlaceModel } = require("./model/userModel");
const app = express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/user",userRouter);
app.get("/place",async(req,res)=>{
  const data = await PlaceModel.find();
  res.send(data)
})


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB");
    } catch (error) {
        console.log(error.message);
    }
  console.log(`Server is running on port ${process.env.PORT}`);
})
