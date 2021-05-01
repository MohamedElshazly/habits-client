const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
// const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
// const bcrypt = require('bcryptjs')
const session = require('express-session')
const authRoutes = require('./routes/auth_routes')
const funcRoutes = require('./routes/func_routes')
require('dotenv').config() 
// const User = require('./users')

const app = express() 

mongoose.connect(
    process.env.DB_HOST, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
        console.log("mongoose is connected!!")
    }
)


app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)
app.use(
    session({
        secret: process.env.SECRET, 
        resave: true, 
        saveUninitialized: true,
    })
)
app.use(cookieParser(process.env.SECRET))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport)

app.use('/auth', authRoutes)
app.use('', funcRoutes)


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Server is running on port 4000")
})