import bookshelf from '../bookshelf'

export default bookshelf.Model.extend({
  tableName: 'users'
})
//mongoose models
//
// const mongoose = require("mongoose")
// var Schema = mongoose.Schema
//
//
// var userSchema = new Schema({
//   title: String,
//   password_digest: String,
//   email: '',
//   location: '',
//   image: ''
// })
//
//
// mongoose.model('users', userSchema)
