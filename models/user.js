const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const UserDetails = require('./userdata');
// const passportLocalMongoose = require('passport-local-mongoose')
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
//email password username dob
// userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);