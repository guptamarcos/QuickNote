const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { isAuthenticated } = require("../utils/middleware.js");
const userController = require("../controllers/userController.js");

// SAVING THE USER INFORMATION IN THE DB
router.route("/me").get(isAuthenticated,userController.getCurrentUser);

router.route("/signup").post(wrapAsync(userController.signup));

// LOGIN THE USER
router.route("/login").post(passport.authenticate("local",{
    failureMessage: true,
}),userController.login);

// LOGOUT THE USER
router.route("/logout").post(isAuthenticated, wrapAsync(userController.logout));


module.exports = router;
