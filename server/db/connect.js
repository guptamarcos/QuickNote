const mongoose = require("mongoose");
const ExpressError = require("../utils/ExpressError.js");

async function connectDb(){
    try{
       if(!process.env.DB_URL){
        throw new ExpressError(500,"Database url is not exist!!!");
       }
       await mongoose.connect(process.env.DB_URL);
    }catch(err){
        throw new ExpressError(err);
    }
}

module.exports = connectDb;