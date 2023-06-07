const express = require("express");
const { userModel } = require("../model/userModel");
const userRouter = express.Router();

userRouter.get("/",async(req,res)=>{
   const data = await userModel.find();
   try {
    res.send(data);
   } catch (error) {
    res.send(error.message)
   }
})

userRouter.post("/addUser",async(req,res)=>{
    const payload = req.body
    
    try {
          const user = new userModel(payload)
          await user.save();
          res.send("User has been registered"); 

    } catch (error) {
          res.send(error.message)
    }
 })


 module.exports = {
    userRouter
 }

 