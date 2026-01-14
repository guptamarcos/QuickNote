const app = require("./app.js");

// REQUIRING ROUTE OBJECT
const userRoutes = require("./routes/userRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");

// ROUTING MIDDLEWARE
app.use("/api/auth",userRoutes);
app.use("/api/tasks",taskRoutes);

// IF PATH DOES NOT EXIST
app.use((req, res, next) => {
  res.status(404).json({message: "Url not found "});
});

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const { status = 400, message = "Internal Server Error" } = err;
  res.status(status).json({
    success: false,
    error: { message, status },
  });
});
