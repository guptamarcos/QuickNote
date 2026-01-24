// ROUTES
const userRoutes = require("./routes/userRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");

// CONFIGURE APP.JS 
const app = require("./app.js");

// ROUTING MIDDLEWARES
app.use("/api/auth", userRoutes);
app.use("/api/tasks", taskRoutes);

// 404 HANDLER
app.use((req, res) => {
  res.status(404).json({ message: "Url not found" });
});

// ERROR HANDLER (LAST)
app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({
    success: false,
    error: { message, status },
  });
});

