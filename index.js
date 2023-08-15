"use strict";
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const homeRoutes = require('./routes/home-route')
const app = express()
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const toastr = require('express-toastr');
const { sequelize, Filiere } = require('./models/homeModel')
const jwt = require('jsonwebtoken')
const { Event, User, Student } = require('./models/homeModel')




const PORT = process.env.SERVER_PORT || 3000

app.use(express.urlencoded({extended: true})); 
// moteur de template ejs 
app.use(expressLayouts)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(flash());



app.use((req, res, next) => {
    const { token } = req.query
    if(token){
        jwt.verify(token, process.env.TOKEN_KEY,async(err, user) => {
            if(!err){
                user.token = token
                res.locals.user = user
                res.locals.etudiant =  await Student.findOne({
                    where : {id : await User.findOne({
                        where: {id : user.idUser}
                    }).then(
                        res => {
                            return res.dataValues.studentId
                        }
                    )
                }
            })  
        
            
            }
        })
    }

    next()

})

app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRoutes.routes)

Event.sync().then(() => {
    console.log('Migration made successfully!');
    }).catch((error) => {
    console.error('Unable to create table : ', error);
});

// server d'application
app.listen(PORT, () => {
    console.log(`App is listenning on url http://localhost:${PORT}`)
})