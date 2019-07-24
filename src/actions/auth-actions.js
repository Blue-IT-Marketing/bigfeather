import {
    auth
} from '../firebase';
import {
    account_details_type
} from '../../types';

export const AUTH_ACTIONS = {
    DO_LOGIN : 'USER:DO_LOGIN',
    DO_LOGOUT: 'USER:DO_LOGOUT',
    DO_CHANGE_PASSWORD: 'USER:DO_CHANGE_PASSWORD',
    DO_SUBSCRIBE: 'USER:DO_SUBSCRIBE',
    DO_SEND_RECOVERY_EMAIL: 'USER:DO_SEND_RECOVERY_EMAIL'
};

export const doDologin_Action = (username,password) => {
    console.log('do login action ', username, ':',password);
    return dispatch => {
		auth.doSignInWithEmailAndPassword(username, password).then(result => {
		    dispatch(result.status ? {
		        type: AUTH_ACTIONS.DO_LOGIN,
		        payload: {
		            user_account: {...result.response},
		            message: 'user logged in',
		            code: 200
		        }
		    } : {
                type: AUTH_ACTIONS.DO_LOGIN,
		        payload: {
		            user_account: {
		                ...account_details_type
		            },
		            message: result.error.message,
		            code: result.error.code
		        }
		    });
		});        
    }
}



