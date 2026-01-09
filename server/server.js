require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

const ExpressError = require("./utils/ExpressError.js");
const connectDb = require("./db/connect.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// LINK THE DATABASE WITH THE APPLICATION
connectDb()
  .then(() => {
    console.log("Database connected !!!");

    // CREATE AND START THE SERVER
    app.listen(port, () => {
      console.log(`Server is listening on the port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed!!", err);
    process.exit(1);
  });

// IF PATH DOES NOT EXIST
app.use((req, res, next) => {
  next(new ExpressError(404, "Url not found !!"));
});

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({
    success: false,
    error: { message, status },
  });
});
