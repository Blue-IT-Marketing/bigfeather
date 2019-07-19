import React, { Fragment } from 'react';


export default function Forget(){
  return (
    <Fragment>
      <div className='box box-body'>
        <div className='box box-header'>
            <h3 className='box-title'>Forget Password / Username </h3>        
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
      </div>
    </Fragment>
  )
}
