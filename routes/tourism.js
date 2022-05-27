const express = require("express");
const catchAsync = require('../utils/catchAsync')
const router = express.Router();

const {
   find,
   show,
   coordinates
    // logoutUser,
    // userDetails,
    // profileDetails,
    // profileDetails1
} = require('../controllers/tourism')

router.route('/find')
    .get(find)
router.route('/coordinates')
    .get(coordinates)
router.route('/:id')
    .get(show)
module.exports = router;