// const passport=require('passport')
// const passportLocal = require('passport-local')
// const jwt =require('jsonwebtoken')
// require('../config/passport');
// const User=require('../models/user')
// const { compareSync,hashSync ,hash,bcrypt} = require('bcryptjs')

// module.exports.registerUser = async (req, res, next) => {
//     console.log(req.body)
//     User.findOne({
//         username: req.body.username
//     }, async (err, doc) => {
//         if (err) throw err;
//         if (doc) res.send("User Already Exists");
//         if (!doc) {
//             const hashedPassword = hashSync(req.body.password, 10);

//             const newUser = new User({
//                 password: hashedPassword,
//                 email: req.body.email,
//                 username:req.body.username,
//             });
//             const user = {
//                 username:req.body.username,
//                 password: req.body.password,
//             }
//             await newUser.save();
//             console.log("User Created");
//             passport.authenticate("local", (err, user, info) => {
//                 if (err) throw err;
//                 if (!user) throw err;
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
// module.exports.loginUser = async (req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//         if (err) throw err;
//         if (!user) throw err;
//         else {
//             req.logIn(user, (err) => {
//                 if (err) throw err;
//                 console.log('req user')
//                 console.log(req.user);
//                 res.send("Successfully Authenticated");

//             });
//         }
//     })(req, res, next);
//         console.log(req.body)
//     console.log(req.body.email)
//     console.log(req.body.password)
//     User.findOne({email:req.body.email}).then(user=>{
//         //No user found
//         if(!user){
//             return res.status(401).send({
//                 success:false,
//                 message:"Could not find the user"
//             })
//         }
//         //Incorrect password
//         if(!compareSync(req.body.password,user.password)){
//             return res.status(401).send({
//                 success:false,
//                 message:"Incorrect password"
//             })
//         }
//         const payload={
//             email:user.email,
//             id:user._id
//         }
//         const token=jwt.sign(payload,"Random string",{expiresIn:"1d"})
//         return res.status(200).send({
//             success:true,
//             message:"Logged in successfully",
//             token:"Bearer"+token

//         })
//     })
// }

const User = require('../models/user')
// const UserData = require('../models/userdata')
const passportLocal = require('passport-local')
const passport = require('passport')
const bcrypt = require("bcryptjs")


module.exports.registerUser = async (req, res, next) => {
    User.findOne({
        username: req.body.username
    }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
            });
            const user = {
                username: req.body.username,
                password: req.body.password,
            }
            await newUser.save();
            console.log("User Created");
            passport.authenticate("local", (err, user, info) => {
                if (err) throw err;
                if (!user) res.send("No User Exists");
                else {
                    req.logIn(user, (err) => {
                        if (err) throw err;
                        console.log('req user')
                        console.log(req.user);
                        res.send("Successfully Authenticated");

                    });
                }
            })(req, res, next);
        }
    });
}
module.exports.userDetails = async (req, res, next) => {
    console.log(req.body)
    const user = await User.findById(req.user.id);
    const userData = new UserData(req.body);
    userData.author = user.id;
    userres = await userData.save();
    console.log(userres)
    console.log(req.user)
    res.send('success')
    req.flash('success', 'Details added');
}

module.exports.loginUser = async (req, res, next) => {
    console.log(req.body)
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                console.log('req user')
                console.log(req.user);
                res.send("Successfully Authenticated");

            });
        }
    })(req, res, next);
}
module.exports.logoutUser = (req, res) => {
    req.logout();
    req.flash('success', 'You have been logged out')
    res.send('success logout')
    // res.redirect('/campgrounds')
}