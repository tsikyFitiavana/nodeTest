const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const config = require('./config/database.config')
const mongoose = require('mongoose')
const route= require('./routes/profile.route')


    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
  

   
    mongoose.Promise = global.Promise
    mongoose.connect(config.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database")
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err)
        process.exit()
    })

    app.get('/', (req, res) => {
        res.json({ "message": "Welcome to Profil app" })
    })

    app.listen(8080, () => {
        console.log("Server is listening on port 8080")
    })
    app.use('/', route);

    module.exports=app