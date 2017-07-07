import React, { Component } from 'react';
import '../App.css';

import ClassNames from 'classnames'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {saveUser} from './actions'

export class User extends Component {
  state = {
    title: '',
    image: '',
    content: '',
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
    if(this.state.image === "") errors.image = "Please Provide an Image URL"
    if(this.state.content === "") errors.content = "Please Provide some content for your post"
    this.setState({ errors })
    const isValid = Object.keys(errors).length === 0

    if (isValid){
      console.log("checking handle submit)");
      const {title, image, content} = this.state;
      this.setState({loading: true});
      this.props.saveUser({title, image, content}).then(
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
        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          id="title"
        />
      <span>{this.state.errors.title}</span>
      </div>

      <div className={ClassNames('field', {error: !!this.state.errors.image})}>
        <label htmlFor="image">Image URL</label>
        <input
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
          id="image"
        />
      <span>{this.state.errors.image}</span>

      </div>

      <div className={ClassNames('field', {error: !!this.state.errors.content})}>
        {this.state.image !== '' &&<img src={this.state.image} alt="image" className="ui small bordered image" />}
      </div>

      <div className={ClassNames('field', {error: !!this.state.errors.content})}>
        <label htmlFor="content">Content</label>
        <input
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          id="content"
        />
      <span>{this.state.errors.content}</span>

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
export default connect(null, {saveUser})(User)
