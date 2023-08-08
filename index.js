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
// express-toastr
const { User, Student } = require('./models/homeModel')
// const toastr = require('express-toastr');

const PORT = process.env.SERVER_PORT || 3000

app.use(express.urlencoded({extended: true})); 
// moteur de template ejs 
app.use(expressLayouts)

app.set('view engine', 'ejs')

app.use(cookieParser('secret'));

app.use(session({
   name:process.env.SESSION_NAME,
   resave : false,
   saveUninitialized : false,
   secret : process.env.SESSION_SECRET,
   cookie : {
    maxAge : 1000 * 60 * 60 * 24 * 7,
    secure : false
   },
}))

app.use(flash());

app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRoutes.routes)


// server d'application
app.listen(PORT, () => {
    console.log(`App is listenning on url http://localhost:${PORT}`)
})