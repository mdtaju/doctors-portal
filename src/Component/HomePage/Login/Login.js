import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import Authentication from '../../SignUp/Authentication';
import firebaseConfig from '../../../FirebaseConfig';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const Login = (props) => {
    const open = props.OpenDialog;
    const handleClose = props.handleCloseDialog;
    const [SignInUser, SetSignInUser] = useState({
        email: "",
        password: "",
        error: ""
    });
    const [Forgot, setForgot] = useState(false);
    const [ForgotMessage, setForgotMessage] = useState({
        message: '',
        color: {
            color: ''
        }
    });
    
    const InputValues = (e) => {
        const GetUser = {
            ...SignInUser
        }
        GetUser[e.target.name] = e.target.value;
        SetSignInUser(GetUser);
    }

    const GoogleAuth = Authentication();

    const SubmitHandler = (e) => {
        const SignInAuth = Authentication();
        SignInAuth.SignInAuthUser(SignInUser, SetSignInUser);
        e.target.reset();
        e.preventDefault();
    }
 
    const forGotSubmit = (e) => {
        const auth = firebase.auth();
        const emailAddress = SignInUser.email;

        auth.sendPasswordResetEmail(emailAddress).then(function() {
            setForgotMessage({
                message: 'Please check your Email. We have sent an E-mail to your email address',
                color: {
                    color: 'green'
                }
            })
        }).catch(function(error) {
            setForgotMessage({
                message: error.message,
                color: {
                    color: 'red'
                }
            })
        });
        e.target.reset();
        e.preventDefault();
    }

    const forgotHandler = () => {
        setForgot(true)
    }

    const RememberHandler = () => {
        setForgot(false)
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <div onClick={GoogleAuth.SignInWithGoogle} className="signUp_facebook_main_aria login_facebook_main_aria d-flex justify-content-between align-items-center">
                        <svg className='svg_google_icon' height="100%" viewBox="0 0 20 20" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"></path><path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"></path><path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"></path><path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"></path></svg>
                        <h6>Login With Google</h6>
                    </div>
                    <h5 className='signUp_or login_or'>Or</h5>
                    {
                        Forgot === false ? 
                        <form onSubmit={SubmitHandler}>
                            <TextField id="login_email" name="email" onBlur={InputValues} type='email' className='appointment_textField' label="Email" variant="outlined" fullWidth required/>
                            <TextField id="login_password" name="password" onBlur={InputValues} type='password' className='appointment_textField' label="password" variant="outlined" fullWidth required/>
                            <p style={{color:"red"}}>{SignInUser.error}</p>
                            <p onClick={forgotHandler} className='forgotPassword'>Forgot Password?</p>
                            <div className="d-flex justify-content-between">
                                <button onClick={handleClose} className="appointment_textFiled_cancel_btn">Cancel</button>
                                <input type="submit" value='Submit' className="appointment_textFiled_send_btn"/>
                            </div>
                        </form> :
                        <form onSubmit={forGotSubmit}>
                            <TextField id="forgot_email" name="email" onBlur={InputValues} type='email' className='appointment_textField' label="Email" variant="outlined" fullWidth required/>
                             <p style={ForgotMessage.color}>{ForgotMessage.message}</p>
                            <p onClick={RememberHandler} className='forgotPassword'>Remember the password</p>
                            <div className="d-flex justify-content-between">
                                <button onClick={handleClose} className="appointment_textFiled_cancel_btn">Cancel</button>
                                <input type="submit" value='Submit' className="appointment_textFiled_send_btn"/>
                            </div>
                        </form>
                    }
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Login;