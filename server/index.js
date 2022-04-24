//dot env setup
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

//imports packages
const express = require("express");
const mongoose = require('mongoose');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const session = require("express-session")
const MongoStore=require('connect-mongo')
// require('../config/passport');
const passport=require('passport')
const flash = require('connect-flash')
const LocalStrategy = require('passport-local')
const {
    Cookie
} = require('express-session');
 
//imports files
const usersRoutes = require('../routes/users');
const tourismRoutes = require('../routes/tourism');
const User = require('../models/user');

//port setup and app initialize
const PORT = process.env.PORT || 3001;
const app = express();


//mongo connection
const MONGODB_URI = "mongodb+srv://forging:forging@cluster0.ek98v.mongodb.net/Forging-Memoire?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err)
    });

app.engine('ejs', ejsMate);

//middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method')) //put delete methods(methods other tha post and get)
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    // origin: 'http://ec2-3-95-176-91.compute-1.amazonaws.com',
    credentials: true
}));
app.use(session({
    secret:'forging',
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({mongoUrl:MONGODB_URI,collectionName:'sessions'}),
    cookie:{
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}))
// app.use(session(sessionConfig))
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
require("../config/passport")(passport);
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})





//routes
app.use('/', usersRoutes);
app.use('/blogs', tourismRoutes);

app.all("*", (req, res, next) => {
    next(new ExpressError("Page not found", 404));
})
app.use((err, req, res, next) => {
    const {
        statusCode = 500
    } = err;
    if (!err.message) err.message = "Oh No Error"
    res.status(statusCode).send('error');
    // render('error', { err })

})

// app.get('/', (req, res) => {
//     res.send("YO");
// })
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});