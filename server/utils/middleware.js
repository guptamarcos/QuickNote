const mongoose = require("mongoose");
const ExpressError = require("./ExpressError.js");

// CHECK USER IS AUTHENTICATED OR NOT 
const isAuthenticated = (req,res,next) =>{
    if(!req.isAuthenticated){
        throw new ExpressError(401,"User must be logged In !!!");
    }
    return next();
}

// CHECKING VALID OBJECT ID
const checkValidObjectId = (req,res,next) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
      next(new ExpressError(400,"Invalid ObjectId!!"));
    }
    return true;
}

module.exports = { isAuthenticated, checkValidObjectId };