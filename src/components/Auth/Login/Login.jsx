import React, { Fragment,useRef,useReducer} from 'react';
import './Login.css';

export default function Login() {

    function HandleSubmit(e){
        e.preventDefault();
        console.log('Handling Submit form');
    }
    
    return (
        <Fragment>
            <div className='Login'>
                <div className='header'>
                    <h3>Login User</h3>    
                </div>

                <form className='form-horizontal' onSubmit={e => HandleSubmit(e)}>
                    <div className='form-group'>
                        <label> Login Name </label>
                        <input type='text' className='form-control' name='loginName'/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' name='password' />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary btn-lg'><strong> Submit</strong></button>
                    </div>
                </form>
                
            </div>
        </Fragment>
    )
}
