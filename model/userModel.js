const express = require("express");
const { Schema, model } = require("mongoose");

const userSchema = Schema({
    first_name:String,
    last_name:String,
    email:String,
    country:String,
    state:String,
    city:String,
    gender:String,
    date_of_birth:String,
    age:Number,
})


const userModel = model("user",userSchema);

module.exports = {
    userModel
}