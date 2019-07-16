import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {routes} from '../../../constants';
const AuthItems = () => {
    return (
        <ul className='Header-nav-items'>
            <li><Link to={routes.home_page}>Home</Link></li>
            <li><Link to={routes.about_page}>About</Link></li>
            <li><Link to={routes.contact_page}>Contact</Link></li>
            <li><Link to={routes.profile_page}>Profile</Link></li>
        </ul>
    )
}

const NonAuthItems = () => {
    return (
        <ul className='Header-nav-items'>
            <li><Link to={routes.home_page}>Home</Link></li>
            <li><Link to={routes.about_page}>About</Link></li>
            <li><Link to={routes.contact_page}>Contact</Link></li>
            <li><Link to={routes.login_page}>Login</Link></li>
        </ul>
    )
}

export default function MenuItems (props) {
    const [user, setLoggedIn] = useState({user:''})
  return (
    <div>
        {
           user.isLoggedIn ? <AuthItems/> : <NonAuthItems/>     
        }
        
    </div>
  )
}

MenuItems.propTypes = {

}
