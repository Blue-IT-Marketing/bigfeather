import React, { Fragment } from 'react';
import './Logout.css';

export default function Logout() {
    return (
        <Fragment>
            <div className='Logout'>
                <h3>Logout</h3>
                <form className='form-horizontal'>
                    <div className='form-group'>
                        <button className='btn btn-danger' name='logout'><strong> Logout </strong></button> 
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
