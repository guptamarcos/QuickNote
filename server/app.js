require("dotenv").config();

// CHECKING ENVIRONMENTAL VARIABLES
if(!process.env.SECRET_KEY || !process.env.DB_URL){
    console.log("Environmental variables are missing!!");
    process.exit(1);
}


// REQUIRE PACKAGES
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { MongoStore }  = require("connect-mongo");


const connectDb = require("./db/connect.js");

// SETTING UP SESSIONS OPTIONS
const sessionOptions = {
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl : process.env.DB_URL,
    collectionName : "sessions",
    crypto: {
      secret : process.env.SECRET_KEY,
    },
    touchAfter: 24*3600,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 3,
    httpOnly: true,
  }
}

// SETTING UP MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(session(sessionOptions));


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


  module.exports = app;