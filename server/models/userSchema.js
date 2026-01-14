const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [10, "Username cannot exceed 10 characters"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    allTasks: [
     { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task" 
     }
    ],
  },
  { timestamps: true }
);

// HASHING THE PASSWORD OF EACH DOCUMENT BEFORE STORING IT IN MONGODB
userSchema.pre("save", async function hashPassword() {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// INSTANCE METHOD
userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
