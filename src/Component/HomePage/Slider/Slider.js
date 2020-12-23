import React, { useEffect, useState } from 'react';
import SliderImage from '../../../Resources/images/Mask Group 1.png';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Logo from '../../../Resources/images/doctors-portal.png';
import { NavLink, Link } from 'react-router-dom';
import Authentication, { AuthChange } from '../../SignUp/Authentication';
import './Slider.css'
import Login from '../Login/Login';

const Slider = () => {
    const [open, setOpen] = useState(false)
    const AuthStateChange = AuthChange();
    const Auth = Authentication();
    const HandleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    useEffect(() => {
        window.AOS.init({
            duration: 2000
        })
    }, [])
    return (
        <>
            <div className="slider_main_container">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <Link to='/' className="navbar-brand" ><img src={Logo} alt="Logo"/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink exact activeClassName='navbar_active_class' to='/' className="nav-link hvr-underline-from-center" >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName='navbar_active_class' to='/appointment' className="nav-link hvr-underline-from-center" >Appointment</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName='navbar_active_class' to='/dashboard' className="nav-link hvr-underline-from-center" >Dashboard</NavLink>
                                </li>
                                {
                                    AuthStateChange !== null ?
                                        <>
                                            <li className="nav-item">
                                                <span className="nav-link nav_link_login" >
                                                    <button onClick={Auth.SignOutAccount} className="slider_login_btn">Sign out</button>
                                                </span>
                                            </li>
                                            <li className="nav-item nav_item_hide">
                                                <span onClick={Auth.SignOutAccount} className="nav-link hvr-underline-from-center" >Sign out</span>
                                            </li>
                                        </> :
                                        <> 
                                            <li className="nav-item nav_link_login">
                                                <span className="nav-link nav_link_login" >
                                                    <button onClick={HandleClickOpen} className="slider_login_btn">Login</button>
                                                </span>
                                            </li>
                                            <li className="nav-item nav_item_hide">
                                                <span onClick={HandleClickOpen} className="nav-link hvr-underline-from-center" >Login</span>
                                            </li>
                                            <li className="nav-item nav_link_signup">
                                                <Link to='/signup' className="nav-link" >
                                                    <button className="slider_signup_btn">Signup</button>
                                                </Link>
                                            </li>
                                            <li className="nav-item nav_item_hide">
                                                <NavLink exact activeClassName='navbar_active_class' to='/signup' className="nav-link hvr-underline-from-center">Signup</NavLink>
                                            </li>
                                        </>
                                }
                                
                            </ul>
                        </div>
                    </nav>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className='slider_image_section'>
                                <h1>Your new smile start here</h1>
                                <p className='paragraph_gray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nostrum libero maiores! Earum, quam iure.</p>
                                <Link to='/appointment'><button className="appointment_btn">GET APPOINTMENT</button></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="slider_image slider_image_section">
                                <img src={SliderImage} alt="LabImage"/>
                            </div>
                        </div>
                    </div>
                    <div className="slider_categories_section">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div data-aos="fade-up" className='slider_categories_1 d-flex align-items-center justify-content-between'>
                                    <div>
                                        <AccessTimeIcon className='slider_icon'/>
                                    </div>
                                    <div>
                                        <h5>Opening Hours</h5>
                                        <p className='slider_categories_p'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div data-aos="fade-up" className='slider_categories_2 d-flex align-items-center justify-content-between'>
                                    <div>
                                        <LocationOnIcon className='slider_icon'/>
                                    </div>
                                    <div>
                                        <h5>Visit our location</h5>
                                        <p className='slider_categories_p'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 slider_categories_3_center">
                                <div data-aos="fade-up" className='slider_categories_3 d-flex align-items-center justify-content-between'>
                                    <div>
                                        <PhoneInTalkIcon className='slider_icon'/>
                                    </div>
                                    <div>
                                        <h5>Contact us now</h5>
                                        <p className='slider_categories_p'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Login OpenDialog={open} SetOpenDialog={setOpen} handleOpen={HandleClickOpen} handleCloseDialog={handleClose}/>
        </>
    );
};

export default Slider;