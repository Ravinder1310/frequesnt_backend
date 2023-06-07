const express = require("express");
const { Schema, model, default: mongoose } = require("mongoose");

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

const placeSchema =Schema({
    place:[]
})

const PlaceModel = model("countrie",placeSchema)
const usersModel = model("user",userSchema);

module.exports = {
    usersModel,
    PlaceModel
}