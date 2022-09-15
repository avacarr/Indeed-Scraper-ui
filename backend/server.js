
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const morgan = require('morgan')
const dotenv = require('dotenv')
const session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const cors = require('cors')
const authRoutes = require('./routes/auth')
const appRoutes = require('./routes/app')
require('dotenv').config();
require('./db/connection')
require('./db/passport');

app.use(cors())
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use(session({
    secret: 'SEIRocks!', 
    resave: false,
    saveUninitialized: true
  }))
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('tiny'))
app.use('/', appRoutes)
app.use('/auth', authRoutes)


app.listen(PORT, ()=>{
    console.log("We are running on ", PORT)
})