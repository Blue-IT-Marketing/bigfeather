import React, { Fragment,useRef,useReducer} from 'react';
import './Login.css';

export default function Login() {

    function HandleSubmit(e){
        e.preventDefault();
        console.log('Handling Submit form');
    }
    
    return (
        <Fragment>
            <div className='box box-body'>
                <div className='box-header'>
                    <h3 className='box-title'>Login User</h3>    
                </div>
                <div className='box-footer'>
                
                    <form className='form-horizontal' onSubmit={e => HandleSubmit(e)}>
                        <div className='form-group'>                            
                            <input type='text' className='form-control' name='loginName' placeholder='Login Name' />
                        </div>
                        <div className='form-group'>                            
                            <input type='password' className='form-control' name='password' placeholder='Password' />
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-primary btn-block btn-lg'><strong> Submit</strong></button>
                        </div>
                    </form>
                
                    
                </div>
                
            </div>
        </Fragment>
    )
}
