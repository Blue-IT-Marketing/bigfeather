import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {routes} from '../../constants';

import Header from '../Layout/Header/Header';
import Home from '../Home/Home';

export default function App () {
  return (
    <Fragment>
      <div className='App'>
 
        <Router>
          <Header/>
            <Route exact path={routes.home_page} component={Home} />


        </Router> 

      </div>
    </Fragment>
  )
};
