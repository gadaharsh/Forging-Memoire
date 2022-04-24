// const User = require('../models/user')

// const passportLocal = require('passport-local')
// const passport = require('passport')
// const bcrypt = require("bcryptjs")


// module.exports.registerUser = async (req, res, next) => {
//     User.findOne({
//         username: req.body.username
//     }, async (err, doc) => {
//         if (err) throw err;
//         if (doc) res.send("User Already Exists");
//         if (!doc) {
//             const hashedPassword = await bcrypt.hash(req.body.password, 10);

//             const newUser = new User({
//                 username: req.body.username,
//                 password: hashedPassword,
//                 email: req.body.email,
//             });
//             const user = {
//                 username: req.body.username,
//                 password: req.body.password,
//             }
//             await newUser.save();
//             console.log("User Created");
//             passport.authenticate("local", (err, user, info) => {
//                 if (err) throw err;
//                 if (!user) res.send("No User Exists");
//                 else {
//                     req.logIn(user, (err) => {
//                         if (err) throw err;
//                         console.log('req user')
//                         console.log(req.user);
//                         res.send("Successfully Authenticated");

//                     });
//                 }
//             })(req, res, next);
//         }
//     });
// }
const fs = require('fs'); 
const { parse } = require('csv-parse');

module.exports.blogInfo = async (req, res, next) => {

    var parser = parse({columns: true}, function (err, records) {
    
        console.log(records)
        res.send(records)
        // return(records)
     
       
    });
    fs.createReadStream('D:/Projects/Forging_Memoire/controllers'+'/tourism_.csv').pipe(parser);
}
// let blogs={};

