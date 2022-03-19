const passport=require('passport')
const jwt =require('jsonwebtoken')
require('../config/passport');
const User=require('../models/user')
const { compareSync,hashSync ,hash} = require('bcryptjs')

module.exports.registerUser = async (req, res, next) => {
    console.log(req.body)
    let user=new User({
        email:req.body.email,
        password:hashSync(req.body.password,10)
    })
    user.save().then(user=>console.log(user))
    res.send("success")
}
module.exports.loginUser = async (req, res, next) => {
    // console.log(req.body)
    // console.log(req.body.email)
    // console.log(req.body.password)
    // User.findOne({email:req.body.email}).then(user=>{
    //     //No user found
    //     if(!user){
    //         return res.status(401).send({
    //             success:false,
    //             message:"Could not find the user"
    //         })
    //     }
    //     //Incorrect password
    //     if(!compareSync(req.body.password,user.password)){
    //         return res.status(401).send({
    //             success:false,
    //             message:"Incorrect password"
    //         })
    //     }
    //     const payload={
    //         email:user.email,
    //         id:user._id
    //     }
    //     const token=jwt.sign(payload,"Random string",{expiresIn:"1d"})
    //     return res.status(200).send({
    //         success:true,
    //         message:"Logged in successfully",
    //         token:"Bearer"+token

    //     })
    // })

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