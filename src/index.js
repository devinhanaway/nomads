import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapNetworkReact from 'google-map-react';

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

import App from './App';
import NewUser from './components/NewUser'
import HeroimageComponent from './components/LandingComponents/HeroimageComponent'
import User from './components/User'
import Landing from './components/Landing'
import MapNetwork from './components/MapNetwork'
import Login from './components/Login'
import SearchUsers from './components/SearchUsers'
import Profile from './components/Profile'
import promiseMiddleware from 'redux-promise-middleware'

const middleware = [thunk]
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

const render = () => {
  let state = store.getState()


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div className="ui">

      <Route exactpath='/' component={App} />
      <Route path='/User' component={User} />
      <Route path='/landing' component={Landing} />
      <Route path='/newuser' component={NewUser} />
      <Route path='/map' component={MapNetwork} />
      <Route path='/login' component={Login} />
      <Route path='/searchusers' component={SearchUsers} />
      <Route path='/profile' component={Profile} />
      </div>

    </Provider>
  </Router>



  ,
  document.getElementById('root'));
}
  store.subscribe(render);
render();
