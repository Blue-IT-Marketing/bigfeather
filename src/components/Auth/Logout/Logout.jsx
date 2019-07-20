import React, { Fragment,useReducer } from 'react';


export default function Logout() {


    let LogoutHandler = (e) => {
        e.preventDefault();
        console.log('Login Out of Big Feather');
    }

    return (
        <Fragment>
            <div className='box box-body'>
                <div className='box box-header'>
                    <h3 className='box-title'> <strong> <i className='fa fa-sign-out'> </i> Logout</strong></h3>
                </div>
                
                <form className='form-horizontal'>
                    <div className='form-group'>
                        <button 
                            type='submit' 
                            className='btn btn-danger' 
                            name='logout' 
                            onClick={e => LogoutHandler(e)}><strong> <i className='fa fa-sign-out'> </i> Logout </strong>
                        </button> 
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
