import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {routes} from '../../constants';

import Header from '../Layout/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login/Login';

export default function App () {
  return (
    <Fragment>
      <div className='App'>
 
        <Router>
          <Header/>
            <div className='App-Body'>
              <Route exact path={routes.home_page} component={Home} />
              <Route exact path={routes.about_page} component={About} />
              <Route exact path={routes.contact_page} component={Contact} />
              <Route path={routes.profile_page} component={Profile} />
              <Route path ={routes.login_page} component={Login} />
            </div>
        </Router> 

      </div>
    </Fragment>
  )
};
