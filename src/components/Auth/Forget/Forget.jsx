import React, { Fragment } from 'react';
import './Forget.css';

export default function Forget(){
  return (
    <Fragment>
        <div className='Forget'>
            <h3>Forget Password / Username </h3>        
        </div>

        <form className='form-horizontal'>
            <div className='form-group'>
                <label >Login Name</label>
                <input type='text' className='form-control' />
            </div>
            <div className='form-group'>
              <label>Password</label>
            </div>
        </form>
    </Fragment>
  )
}
