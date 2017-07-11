
import express from 'express'
const router = express.Router()

// postgres setup
const queries = require('../db/queries');
const knex = require('../db/connection');
import bcrypt from 'bcrypt'
import isEmpty from "lodash/isEmpty"
import Validator from "validator"




function validate(data){
  const errors = {}
  if(Validator.isEmpty(data.title)) {
    errors.title = "This Field is Required"
  }
  if(Validator.isEmpty(data.email)) {
    errors.email = "This Field is Required"
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid"
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = "This Field is Required"
  }
  if(!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.password = "Password confirmation must match"
  }
  if(Validator.isEmpty(data.location)) {
    errors.location = "This Field is Required"
  }
  if(Validator.isEmpty(data.image)) {
    errors.image = "This Field is Required"
  }
  return {
    errors,
    isValid: isEmpty(errors)}
}

function validateInput(data, otherValidations){
  let {errors} = validate(data);

  return knex('users').select().where('email', data.email).then(user =>{
    if (user){
      console.log("user");
      console.log(user);
      console.log(data.email);
      if (user.email = data.email){
        errors.email = 'There is already a user with this email'
      }
    }
    return{
      errors,
      isValid: isEmpty(errors)
    }
  })
}

//postgres database conncetion
import User from '../models/users'

router.post('/register', (req, res)=>{

  const { title, email, password, image, location} = req.body
  // const password_digest = bcrypt.hashSync(password, 10)
  const {errors, isValid} = validate(req.body)
  if(isValid){
  console.log(req.body);
    const {title, email, password, passwordConfirmation, image, location}= req.body

    queries.findOrAddUser(req.body)
    .then(users => {
      console.log("kjenfkjwebfkwjqbfwkbfjkwqbf");
      console.log(users);
      res.json({
        status: "success"
        // status: 'success',
        // data: user
      });
    })
    .catch((err) => {
        console.log('They see me routing dirty!');
        return next(err);
       //res.json(err);
    })

  }else{
    res.status(400).json(errors)

  }
})

router.get('/getall', (req, res, next) => {
  console.log(req.body);
  queries.getAllUsers()
  .then((users) => {
    console.log(users);
    res.json({
      users
      // status: 'success',
      // data: user
    });
  })
  .catch((err) => {
      console.log('They see me routing dirty!');
      return next(err);
     //res.json(err);
  });
});













export default router
