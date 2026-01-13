const app = require("./app.js");
const ExpressError = require("./utils/ExpressError.js");

const userRoutes = require("./controllers/userController.js");

// ROUTING MIDDLEWARE
app.use("/api/auth",userRoutes);


// IF PATH DOES NOT EXIST
app.use((req, res, next) => {
  next(new ExpressError(404, "Url not found !!"));
});

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const { status = 400, message = "Internal Server Error" } = err;
  res.status(status).json({
    success: false,
    error: { message, status },
  });
});
