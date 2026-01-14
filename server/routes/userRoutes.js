const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { isAuthenticated } = require("../utils/middleware.js");
const userController = require("../controllers/userController.js");

// SAVING THE USER INFORMATION IN THE DB
router.route("/signup").post(wrapAsync(userController.signup));

// LOGIN THE USER
router.route("/login").post(passport.authenticate("local"),userController.login);

// LOGOUT THE USER
router.route("/logout").post(isAuthenticated, userController.logout);


module.exports = router;
