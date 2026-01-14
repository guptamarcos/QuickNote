const { signupValidate } = require("../utils/schemaValidator.js");
const User = require("../models/userSchema.js");

// SAVING THE USER INFORMATION IN THE DB
module.exports.signup = async (req, res) => {
    const { error, value } = signupValidate.validate(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }
    const { username, email, password } = value;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  }

// LOGIN THE USER
module.exports.login  =  (req, res) => {
  res.status(200).json({
    success: true,
    message: "User logged In successfully",
    user:{
      allTasks: req.user.allTasks,
      username: req.user.username,
      email: req.user.email,
      id: req.user._id,
    },
  });
};

// LOGOUT THE USER
module.exports.logout =  (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Logout failed" });
    }
  });
  res.status(200).json({ success: true, message: "User logged out successfully" });
};