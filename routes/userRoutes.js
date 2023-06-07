const express = require("express");
const { usersModel } = require("../model/userModel");
const userRouter = express.Router();

userRouter.get("/",async(req,res)=>{
   const data = await usersModel.find();
   try {
    res.send(data);
   } catch (error) {
    res.send(error.message)
   }
})

userRouter.post("/addUser",async(req,res)=>{
    const payload = req.body
    
    try {
          const user = new usersModel(payload)
          await user.save();
          res.send("User has been registered"); 

    } catch (error) {
          res.send(error.message)
    }
 })


 module.exports = {
    userRouter
 }

 