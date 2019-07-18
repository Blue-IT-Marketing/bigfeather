import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {routes} from '../../../constants';

const SideBarMenuAuth = () => {
    return (
        <ul className="sidebar-menu">
            <li className="header">B-Feather</li>
            <li><Link To="/" title="Big feather Music Portal"><i className="glyphicon glyphicon-home"></i> <strong>Home</strong></Link></li>
            <li><Link To="/about" title="About"><i className="glyphicon glyphicon-info-sign"></i> <strong>About</strong></Link></li>
            <li><Link To="/contact" title="Contact Us"><i className="glyphicon glyphicon-envelope"></i> <strong>Contact</strong></Link></li>
            <li className="active treeview">
                <Link To="#">
                    <i className="fa fa-user-md"></i> <span>Client Area</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>
                </Link>
                <ul className="treeview-menu">
                    <li><Link To="/account" title="Create your Account"><i className="glyphicon glyphicon-log-in"> </i> <strong> Account</strong> </Link> </li>
                    <li><Link To="/admin" title="Messaging"><i className="glyphicon glyphicon-send"> </i> <strong>Bulk SMS</strong></Link></li>
                    <li><Link To="/fax" title="Fax Portal"><i className="fa fa-tty"> </i> <strong>Fax</strong></Link></li>
                    <li><Link To="/advertise" title="Create and Send Your SMS Advertisements"><i className="glyphicon glyphicon-bullhorn"> </i> <strong>Advertise</strong></Link></li>
                    <li><Link To="/surveys" title="Create &amp; Send your SMS based Surveys"><i className="glyphicon glyphicon-pencil"> </i> <strong> Surveys</strong></Link></li>
                    <li><Link To="/affiliates" title="Earn Real Money promoting this platform and selling Bulk Messages"><i className="glyphicon glyphicon-btc"> </i> <strong>Affiliates</strong></Link></li>
                </ul>
            </li>
            <li><Link To="/blog" title="Bulk Messaging &amp; Contact Management Blog"><i className="glyphicon glyphicon-book"> </i> <strong>Blog</strong></Link></li>
            <li><Link To="/dashboard" title="Dashboard"><i className="glyphicon glyphicon-dashboard"> </i> <strong>Dashboard</strong></Link></li>
        </ul>        
    )
}

const SideBarMenuNonAuth = () => {
    return (
    <ul className="sidebar-menu">
        <li className="header">B-Feather</li>
            <li className="active treeview">
                <li><Link to={routes.home_page} title="Big feather Music Portal"><i className="fa fa-home"></i> Home</Link></li>
                <li><Link to={routes.about_page} title="Contact Us"><i className="fa fa-info"></i> About</Link></li>
                <li><Link to={routes.contact_page} title="Contact Us"><i className="fa fa-envelope"></i> Contact</Link></li>
                <li><Link to={routes.login_page} title="Login To Big Feather"><i className="fa fa-sign-in"> </i> Login </Link></li>
        </li>
    </ul>   
    ) 
}


export default function MenuItems (props) {
    const [user, setLoggedIn] = useState({user:''})
  return (
    <div>
        {
           user.isLoggedIn ? <SideBarMenuAuth/> : <SideBarMenuNonAuth/>     
        }
        
    </div>
  )
}

MenuItems.propTypes = {

}
