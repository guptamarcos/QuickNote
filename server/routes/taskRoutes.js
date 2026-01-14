const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isAuthenticated,checkValidObjectId} = require("../utils/middleware.js");
const taskController = require("../controllers/taskController.js");

router.route("/")
  .get(isAuthenticated, wrapAsync(taskController.indexRoute))
  .post(isAuthenticated, wrapAsync(taskController.newRoute));

router.route("/:id")
  .patch(isAuthenticated,checkValidObjectId,wrapAsync(taskController.updateRoute))
  .delete(isAuthenticated,checkValidObjectId,wrapAsync(taskController.deleteRoute));


module.exports = router;
