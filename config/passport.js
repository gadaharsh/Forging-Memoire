const passport =require('passport'),LocalStrategy=require('passport-local').Strategy;
const { compareSync } = require('bcryptjs');
const User=require('../models/user')


passport.use(new LocalStrategy(
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); } //when some error occurs
        if (!user) { return done(null, false,{message:'Incorrect email.'}); } //when email is invalid
        if (!compareSync(password,user.password)) { return done(null, false,{message:'Incorrect password.'}); } //when password is invalid
        return done(null, user); //when user is valid
      });
    }
  ));

  //persists user data inside session
  passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username });
    });
  });
  
  //fetches session details using session id
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });