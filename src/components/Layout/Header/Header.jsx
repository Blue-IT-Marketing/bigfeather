import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import MenuItems from '../MenuItems/MenuItems';

function Header(props) {
    return (
        <div>
            <Fragment>
                <header className='App-header'>
                    <nav className='Header-nav'>
                        <div className='Header-Logo'>Big Feather Music Portal</div>
                        <div className='spacer'> </div>
                        <div className='spacer'> </div>
                        <div className='spacer'> </div>
                        <div className='Header-nav-items'>
                            <MenuItems />
                        </div>
                        
                    </nav>
                </header>
            </Fragment>
        </div>
    )
}

Header.propTypes = {

}

export default Header

