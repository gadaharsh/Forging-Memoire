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
router.route('/:id')
    .get(show)
router.route('/coordinates')
    .get(coordinates)
module.exports = router;