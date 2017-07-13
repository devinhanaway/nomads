import React, { Component } from 'react';
import '../App.css';

import ClassNames from 'classnames'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Signup} from './actions'

export class User extends Component {
  state = {
    title: '',
    email: '',
    password:'',
    passwordConfirmation:'',
    image: '',
    location: '',
    errors: {},
    loading: false,
    done: false
  }

  handleChange = (e) => {
    if(!!this.state.errors[e.target.name]){
      let errors = Object.assign({}, this.state.errors)
      delete errors[e.target.name]
      this.setState({
         [e.target.name]: e.target.value,
          errors

       })
     }else {
       this.setState({[e.target.name]: e.target.value});
     }
   }


  handleSubmit = (e) => {
    e.preventDefault();
    let errors = {}
    if(this.state.title === "") errors.title = "Please Provide a Title"
    if(this.state.email === "") errors.email = "Please Provide a Email"
    if(this.state.password === "") errors.password = "Please Provide a password"
    if(this.state.passwordConfirmation != this.state.password) errors.passwordConfirmation = "Password Confirmation Must match Password"
    if(this.state.image === "") errors.image = "Please Provide an Image URL"
    if(this.state.location === "") errors.location = "Please Provide some location for your post"
    this.setState({ errors })
    const isValid = Object.keys(errors).length === 0

    if (isValid){
      console.log("checking handle submit)");
      const {title, email, password, passwordConfirmation, image, location} = this.state;
      this.setState({loading: true});
      this.props.Signup({title, email, password, passwordConfirmation, image, location})
      .then(
        () => {this.setState({done: true})},
        (err)=> err.response.json().then(({errors})=> this.setState({errors, loading: false}))
      )
    }
  }


  render(){
    const form = (
      <form className={ClassNames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
        <h1>Become a Nomad</h1>

      {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

      <div className={ClassNames('field', {error: !!this.state.errors.title})}>
        <label htmlFor="title">Name</label>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          id="title"
          placeholder="first, last"
        />
      <span>{this.state.errors.title}</span>
      </div>
      <div className={ClassNames('field', {error: !!this.state.errors.email})}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          id="email"
          placeholder="first, last"
        />
      <span>{this.state.errors.email}</span>
      </div>
      <div className={ClassNames('field', {error: !!this.state.errors.password})}>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          id="password"
          placeholder="first, last"
        />
      <span>{this.state.errors.password}</span>
      </div>
      <div className={ClassNames('field', {error: !!this.state.errors.passwordConfirmation})}>
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          name="passwordConfirmation"
          value={this.state.passwordConfirmation}
          onChange={this.handleChange}
          id="passwordConfirmation"
          placeholder="first, last"
        />
      <span>{this.state.errors.passwordConfirmation}</span>
      </div>

      <div className={ClassNames('field', {error: !!this.state.errors.image})}>
        <label htmlFor="image">Profile Photo</label>
        <input
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
          id="image"
          placeholder="copy and paste a image url of you"
        />
      <span>{this.state.errors.image}</span>

      </div>

      <div className={ClassNames('field', {error: !!this.state.errors.location})}>
        {this.state.image !== '' &&<img src={this.state.image} alt="image" className="ui small bordered image" />}
      </div>

      <div className={ClassNames('field', {error: !!this.state.errors.location})}>
        <label htmlFor="location">Current Home</label>
        <input
          name="location"
          value={this.state.location}
          onChange={this.handleChange}
          id="location"
          placeholder="City, State, Country"
        />
      <span>{this.state.errors.location}</span>

      </div>

      <div className="field">
        <button className="ui primary button">Signup</button>
      </div>

    </form>
    )
    return(
      <div className="ui container">
        {this.state.done ? <Redirect to="/user"/>: form}
      </div>
    )
  }
}
export default connect(null, {Signup})(User)
