import express from 'express'
import mongodb from 'mongodb'
import cors from 'cors'
import bodyParser from 'body-parser'
const queries = require('./db/queries');


import users from './routes/users'


const app = express()
const dbUrl = 'mongodb://localhost/nomads'

//for setting up mongoose
const mongoose = require("mongoose")
const fs = require('fs')
const path = require('path')

//middleware

app.use(bodyParser.json())
app.use(cors())
const port = 8080

//for setting up mongoose load all files in model dir
fs.readdirSync(__dirname + "/models").forEach(function(filename){
  if (~filename.indexOf('.js')) require(__dirname + '/models/'+ filename)
})


// routes
app.use('/api/users', users)


//intial request
mongodb.MongoClient.connect(dbUrl, function(err, db) {
  app.use((req, res)=> {
    res.status(404).json({
      errors: {
        global: "Still working on it, please try this again later :)"
      }
    })
  })

    app.listen(port, () => console.log(`'server listening on ${port}'`));

})
