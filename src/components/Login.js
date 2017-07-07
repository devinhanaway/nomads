import React, { Component } from 'react';
import '../App.css';

import ClassNames from 'classnames'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {saveUser} from './actions'

export class User extends Component {
  state = {
    email: '',
    password:'',
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
    if(this.state.email === "") errors.email = "Please Provide a Email"
    if(this.state.password === "") errors.password = "Please Provide a password"
    this.setState({ errors })
    const isValid = Object.keys(errors).length === 0

    if (isValid){
      console.log("checking handle submit)");
      const {email, password} = this.state;
      this.setState({loading: true});
      this.props.saveUser({email, password}).then(
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



      <div className="field">
        <button className="ui primary button">Login</button>
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
export default connect(null, {saveUser})(User)
