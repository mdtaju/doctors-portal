import React, { useState } from 'react';
import SignUpImage from '../../Resources/images/Group 140.png';
import Logo from '../../Resources/images/doctors-portal.png';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Authentication from './Authentication';
import './SignUp.css'
import Login from '../HomePage/Login/Login';

const SignUp = () => {
    const [open, setOpen] = useState(false)
    const HandleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const GoogleAuth = Authentication();

    const [NewUser, SetNewUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: ""
    })

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [valuesConfirm, setValuesConfirm] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangeConfirm = (prop) => (event) => {
        setValuesConfirm({ ...valuesConfirm, [prop]: event.target.value });
      };
    
    const handleClickShowPasswordConfirm = () => {
    setValuesConfirm({ ...valuesConfirm, showPassword: !valuesConfirm.showPassword });
    };

    const handleMouseDownPasswordConfirm = (event) => {
        event.preventDefault();
    };

    const HandleBlur = (e) => {
        const GetUser = {
            ...NewUser
        }
        GetUser[e.target.name] = e.target.value;
        SetNewUser(GetUser);
    }

    const HandleSubmitBtn = () => {
        let ConfirmPassword = document.getElementById("signUp_confirm_password");
        if (NewUser.password !== NewUser.confirmPassword) {
            ConfirmPassword.setCustomValidity("Password not match")
        } else {
            ConfirmPassword.setCustomValidity("")
        }
    }

    const SignInHandleSubmitBtn = () => {
        let ConfirmPassword = document.getElementById("signIn_confirm_password");
        if (NewUser.password !== NewUser.confirmPassword) {
            ConfirmPassword.setCustomValidity("Password not match")
        } else {
            ConfirmPassword.setCustomValidity("")
        }
    }

    const HandleSubmit = (event) => {
        const Auth = Authentication();
        Auth.CreatNewAccount(NewUser, SetNewUser)
        event.target.reset()
        event.preventDefault()
    }

    return (
        <>
            <section className="container">
                <div className="signUp_main_container">
                    <div className="row d-flex align-items-end signUp_pc_window">
                        <div className="col-md-6">
                            <div className="signUp_categories">
                                <Link to='/'><img src={Logo} alt="Logo"/></Link>
                                <form onSubmit={HandleSubmit} >
                                    <TextField name='name' onBlur={HandleBlur} type='text' label="Your Name" className='appointment_textField' variant="outlined" fullWidth required/>
                                    <TextField name='email' onBlur={HandleBlur} type='email' label="Email" className='appointment_textField' variant="outlined" fullWidth required/>
                                    <FormControl className='appointment_textField' variant="outlined" required fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            name='password' 
                                            minLength="6"
                                            onBlur={HandleBlur}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            labelWidth={85}
                                        />
                                    </FormControl>
                                    <FormControl className='appointment_textField' required fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                        <OutlinedInput
                                            type={valuesConfirm.showPassword ? 'text' : 'password'}
                                            value={valuesConfirm.password}
                                            onChange={handleChangeConfirm('password')}
                                            name='confirmPassword' 
                                            onBlur={HandleBlur}
                                            id="signUp_confirm_password"
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPasswordConfirm}
                                                onMouseDown={handleMouseDownPasswordConfirm}
                                                edge="end"
                                                >
                                                {valuesConfirm.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            labelWidth={148}
                                        />
                                    </FormControl>
                                        <p style={{color:"red"}}>{NewUser.error}</p>
                                    <input type='submit' onClick={HandleSubmitBtn} value='Signup' className='signUp_submit_btn' />
                                </form>
                                <p onClick={HandleClickOpen} className='signUp_have_an_account'>Already have an account.</p>
                                <h5 className='signUp_or'>Or</h5>
                                <div onClick={GoogleAuth.SignInWithGoogle} className="signUp_facebook_main_aria d-flex justify-content-between align-items-center">
                                <svg className='svg_google_icon' height="100%" viewBox="0 0 20 20" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"></path><path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"></path><path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"></path><path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"></path></svg>
                                    <h6>Continue With Google</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="signUp_illustration">
                                <img src={SignUpImage} alt="Illustration"/>
                            </div>
                        </div>
                    </div>
                    <div className="signUp_tab_window">
                        <Link to='/'><img src={Logo} alt="Logo"/></Link>
                        <form onSubmit={HandleSubmit} >
                            <TextField name='name' onBlur={HandleBlur} type='text' label="Your Name" className='appointment_textField' variant="outlined" fullWidth required/>
                            <TextField name='email' onBlur={HandleBlur} type='email' label="Email" className='appointment_textField' variant="outlined" fullWidth required/>
                            <FormControl className='appointment_textField' variant="outlined" required fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    name='password' 
                                    onBlur={HandleBlur}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelWidth={85}
                                />
                            </FormControl>
                            <FormControl className='appointment_textField' required fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    type={valuesConfirm.showPassword ? 'text' : 'password'}
                                    value={valuesConfirm.password}
                                    onChange={handleChangeConfirm('password')}
                                    name='confirmPassword' 
                                    onBlur={HandleBlur}
                                    id="signIn_confirm_password"
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordConfirm}
                                        onMouseDown={handleMouseDownPasswordConfirm}
                                        edge="end"
                                        >
                                        {valuesConfirm.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelWidth={148}
                                />
                            </FormControl>
                            <input type='submit' value='Signup' onClick={SignInHandleSubmitBtn} className='signUp_submit_btn' />
                        </form>
                        <p onClick={HandleClickOpen} className='signUp_have_an_account'>Already have an account.</p>
                        <h5 className='signUp_or'>Or</h5>
                        <div onClick={GoogleAuth.SignInWithGoogle} className="signUp_facebook_main_aria d-flex justify-content-between align-items-center">
                            <svg className='svg_google_icon' height="100%" viewBox="0 0 20 20" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"></path><path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"></path><path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"></path><path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"></path></svg>
                            <h6>Continue With Google</h6>
                        </div>
                    </div>
                </div>
            </section>
            <Login  OpenDialog={open} SetOpenDialog={setOpen} handleOpen={HandleClickOpen} handleCloseDialog={handleClose}/>
        </>
    );
};

export default SignUp;