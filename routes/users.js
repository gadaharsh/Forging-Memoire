const express = require("express");
const catchAsync = require('../utils/catchAsync')
// const passport = require('passport')
// const {
//     isLoggedIn,
//     validateCampground,
//     isAuthor
// } = require('../utils/middleware')
// const passportLocal = require("passport-local").Strategy;
// const cookieParser = require("cookie-parser");
// const bcrypt = require("bcryptjs");
// const session = require("express-session");
// const bodyParser = require("body-parser");

const router = express.Router();

const {
    registerUser,
    loginUser,
    // logoutUser,
    // userDetails,
    // profileDetails,
    // profileDetails1
} = require('../controllers/users')

router.route('/register')
    // .get(registerUserrender)
    .post(registerUser)
router.route('/login')
    .post(catchAsync(loginUser))
// .get(loginUserrender)
// router.route('/user')
//     .get((req, res) => {
//         res.send(req.user);
//         return (req.user)
//     })
// router.route('/userdetails')
//     .post(isLoggedIn, catchAsync(userDetails))
// router.route('/profile')
//     .get(catchAsync(profileDetails))
// router.route('/profile1')
//     .get(catchAsync(profileDetails1))
// router.get('/logout', logoutUser)
// module.exports = router;
module.exports = router;