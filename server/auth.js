const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/userSchema.js");
const app = require("./app.js");

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(async function (username, password, done){
  try{
    const currUser = await User.find({ username });
    if(!currUser){
      return done(null,false,{msg: "User doesn't exist!!!"});
    }
    const checkPassword = currUser.checkPassword(password);
    if(!checkPassword){
      return done(null,false,{msg: "Wrong password !!!"});
    }
    return done(null,currUser);
  }catch(err){
    done(err);
  }
}));

passport.serializeUser((user,done)=>{
  return done(null,user.id);
});

passport.deserializeUser(async function (id,done){
  try{
    const currUser = await User.findById(id);
    return done(null,currUser);
  }catch(err){
    return done(err);
  }
});