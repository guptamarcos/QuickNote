const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3,"Username must be at least 3 characters"],
    maxlength: [10,"Username cannot exceed 10 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: [true,"Email is already exist"],
  },
  password: {
    type: String,
    required: true,
  },
  allCards: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Card",
  }
},{timestamps: true});


// HASHING THE PASSWORD OF EACH DOCUMENT BEFORE STORING IT IN MONGODB
userSchema.pre("save",async function hashPassword(){
  if(!this.isModified("password")){
    return next();
  }
  this.password = await bcrypt.hash(this.password,10);
})


// INSTANCE METHOD
userSchema.methods.checkPassword = async function (password){
  return await bcrypt.compare(password,this.password);
}

const User = mongoose.model("User",userSchema);

module.exports = User;