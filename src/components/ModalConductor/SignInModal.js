
import React, { Component } from 'react';

import ModalWrapper from './ModalWrapper';
import ClassNames from 'classnames'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

export class SignIn extends Component {
  state = {
    email: '',
    password:'',
    errors: {},
    loading: false,
    done: false,
    // hideModal: hideModal(),
    // signIn: signIn()
  }




render(){

  return (
    <ModalWrapper className=""
      // {...props}
      title="Sign in"
      width={400}
      showOk={false}>
      <div className="modal">
        <form onSubmit={this.handleSubmit}>
          <h1>Become a Nomad</h1>

        <div >
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
            placeholder="first, last"
          />

        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            placeholder="first, last"
          />
        </div>



        <div className="field">
          <button className="ui primary button">Login</button>
        </div>

      </form>
      </div>
    </ModalWrapper>
  );
}
}
// export default connect(null, {})(SignIn)
export default connect(state => state)(SignIn);

// export default SignIn;
