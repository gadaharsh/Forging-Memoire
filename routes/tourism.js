const express = require("express");
const catchAsync = require('../utils/catchAsync')
const router = express.Router();

const {
   blogInfo
    // logoutUser,
    // userDetails,
    // profileDetails,
    // profileDetails1
} = require('../controllers/tourism')

router.route('/find')
    .get(catchAsync(blogInfo))
module.exports = router;