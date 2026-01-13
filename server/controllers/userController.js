const express = require("express");
const router = express.Router();
const { signupValidate } = require("../utils/schemaValidator.js");
const ExpressError = require("../utils/ExpressError.js");
const User = require("../models/userSchema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

// SAVING THE USER INFORMATION IN THE DB
router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    const { error, value } = signupValidate.validate(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }
    const { username, email, password } = value;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User is create successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  })
);

// LOGIN THE USER
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ success: false , message: "Invalid username or password"});

    req.login(user, (err) => {
      if (err) return next(err);
      res.json({ success: true , message: "User is loggedIn successfully"});
    });
  })(req, res, next); // ← middleware invoked here
});


// LOGOUT THE USER
router.post("/logout",(req,res)=>{
  req.logout((err)=>{
    if(err){
      return res.status(500).json({success: false, message: "Logout failed"});
    }
  })
  res.status(200).json({success: true, message:"User is logged out successfully"});
})


module.exports = router;


