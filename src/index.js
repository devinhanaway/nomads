import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';


import App from './App';
import NewUser from './components/NewUser'
import User from './components/User'
import Landing from './components/Landing'
import SimpleMap from './components/SimpleMap'

//middleware

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div className="ui">
      <Route path='/' component={App} />
      <Route path='/User' component={User} />
      <Route path='/landing' component={Landing} />
      <Route path='/newuser' component={NewUser} />
      <Route path='/simplemap' component={SimpleMap} />
      </div>
    </Provider>
  </Router>

  ,
  document.getElementById('root'));
