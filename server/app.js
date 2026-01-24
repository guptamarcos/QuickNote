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
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/userSchema.js");

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
    sameSite: "lax", 
    secure: false,
  }
}

// SETTING UP MIDDLEWARES
app.use(cors({origin: ["http://localhost:5174","http://localhost:5173"], credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// DEFINING AUTHENTICATION STRATEGY
passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: "User doesn't exist!!!" });
      }
      const isValid = await user.checkPassword(password);
      if (!isValid) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const currUser = await User.findById(id);
    return done(null, currUser);
  } catch (err) {
    return done(err);
  }
});


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