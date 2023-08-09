"use strict";
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const homeRoutes = require('./routes/home-route')
const app = express()
const flash = require('connect-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const toastr = require('express-toastr');
const { sequelize } = require('./models/homeModel')
// express-toastr
const { User, Student } = require('./models/homeModel')
// const toastr = require('express-toastr');

const PORT = process.env.SERVER_PORT || 3000

app.use(express.urlencoded({extended: true})); 
// moteur de template ejs 
app.use(expressLayouts)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(cookieParser('secret'));

const sess = {
    resave : false,
    saveUninitialized : true,
    secret : 'keyboard cat',
    cookie : {
     maxAge : 1000 * 60 * 60 * 24 * 7,
     secure : true
    },
 }

 console.log(app.get('env'))

 if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

app.use(flash());

app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRoutes.routes)

sequelize.sync().then(() => {
    console.log('Migration made successfully!');
    }).catch((error) => {
    console.error('Unable to create table : ', error);
});

// server d'application
app.listen(PORT, () => {
    console.log(`App is listenning on url http://localhost:${PORT}`)
})