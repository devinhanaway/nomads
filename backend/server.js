import express from 'express'
import mongodb from 'mongodb'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
const dbUrl = 'mongodb://localhost/nomads'

function validate(data){
  let errors = {}
  if(data.title === "") errors.title = "Please Provide a Title"
  if(data.email === "") errors.email = "Please Provide a Email"
  if(data.password === "") errors.password = "Please Provide a Password"
  if(data.image === "") errors.image = "Please Provide an Image URL"
  if(data.location === "") errors.location = "Please Provide some location for your post"
  const isValid = Object.keys(errors).length === 0
  return {errors, isValid};
}

app.use(cors())

const port = 8080


mongodb.MongoClient.connect(dbUrl, function(err, db) {


  app.get('/api/users', (req, res) => {

    db.collection('users').find({}).toArray((err, users) => {
      res.json({ users })
    })

  })

  app.post('/api/users', (req, res) => {
    const {errors, isValid } = validate(req.body);
    if (isValid){
      const { title, email, password, image, location} = req.body
      db.collection("users").insert({title, email, password, image, location}, (err, result)=> {
        if(err){
          res.status(500).json({errors: {global: "something went wrong"}})
        } else{
          res.json({user: result.ops[0]})
        }
      })
    }else{
      res.status(400).json({errors})
    }
  })

  app.use((req, res)=> {
    res.status(404).json({
      errors: {
        global: "Still working on it, please try this again later :)"
      }
    })
  })

    app.listen(port, () => console.log(`'server listening on ${port}'`));



})
