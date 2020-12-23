import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../Resources/images/doctors-portal.png';
import SliderImage from '../../Resources/images/Mask Group 1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentPage.css'
import AppointmentDialog from './AppointmentDialog/AppointmentDialog';
import Authentication from '../SignUp/Authentication';

const AppointmentPage = () => {
    const [Value, SetValue] = useState(new Date());
    const [AppInfo, SetAppInfo] = useState({
        key: "",
        title: "",
        time: ""
    })
    const [open, setOpen] = useState(false);
    const Auth = Authentication();

    const handleClickOpen = () => {
      setOpen(true);
    };
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
                                <li className="nav-item">
                                    <span className="nav-link nav_link_login" >
                                        <button onClick={Auth.SignOutAccount} className="slider_login_btn">Sign out</button>
                                    </span>
                                </li>
                                <li className="nav-item nav_item_hide">
                                    <span onClick={Auth.SignOutAccount} className="nav-link hvr-underline-from-center" >Sign out</span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className='slider_image_section'>
                                <h1>Appointment</h1>
                                <Calendar 
                                    Value={Value}
                                    onChange={SetValue}
                                    minDate={new Date()}
                                    showFixedNumberOfWeeks={true}
                                    className='appointment_date_picker'
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="slider_image slider_image_section">
                                <img src={SliderImage} alt="LabImage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container">
                <div className="available_appointments_main_container">
                    <h1 className='main_title_appointmentPage'>Available Appointment on {Value.toDateString()}</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='appointmentPage_categories'>
                                <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p className="footer_paragraph_address">10 SPACES AVAILABLE</p>
                                <button 
                                    onClick={() => {SetAppInfo({key: "A01", title: "Teeth Orthodontics", time: "8:00 AM - 9:00 AM"}); handleClickOpen()}}
                                    className="appointment_btn">BOOK APPOINTMENT
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='appointmentPage_categories'>
                                <h4 className="main_title_appointmentPage">Cosmetic Dentistry</h4>
                                <h6>10:05 AM - 11:30 AM</h6>
                                <p className="footer_paragraph_address">10 SPACES AVAILABLE</p>
                                <button 
                                    onClick={() => {SetAppInfo({key: "B02", title: "Cosmetic Dentistry", time: "10:05 AM - 11:30 AM"}); handleClickOpen()}}
                                    className="appointment_btn">BOOK APPOINTMENT
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='appointmentPage_categories'>
                                <h4 className="main_title_appointmentPage">Teeth Cleaning</h4>
                                <h6>5:00 PM - 6:30 PM</h6>
                                <p className="footer_paragraph_address">10 SPACES AVAILABLE</p>
                                <button 
                                    onClick={() => {SetAppInfo({key: "C03", title: "Teeth Cleaning", time: "5:00 PM - 6:30 PM"}); handleClickOpen()}}
                                    className="appointment_btn">BOOK APPOINTMENT
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='appointmentPage_categories'>
                                <h4 className="main_title_appointmentPage">Cavity Protection</h4>
                                <h6>7:00 AM - 8:30 AM</h6>
                                <p className="footer_paragraph_address">10 SPACES AVAILABLE</p>
                                <button 
                                    onClick={() => {SetAppInfo({key: "D04", title: "Cavity Protection", time: "7:00 AM - 8:30 AM"}); handleClickOpen()}}
                                    className="appointment_btn">BOOK APPOINTMENT
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='appointmentPage_categories'>
                                <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p className="footer_paragraph_address">10 SPACES AVAILABLE</p>
                                <button 
                                    onClick={() => {SetAppInfo({key: "E05", title: "Teeth Orthodontics", time: "8:00 AM - 9:00 AM"}); handleClickOpen()}}
                                    className="appointment_btn">BOOK APPOINTMENT
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='appointmentPage_categories'>
                                <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4>
                                <h6>8:00 AM - 9:00 AM</h6>
                                <p className="footer_paragraph_address">10 SPACES AVAILABLE</p>
                                <button 
                                    onClick={() => {SetAppInfo({key: "F06", title: "Teeth Orthodontics", time: "8:00 AM - 9:00 AM"}); handleClickOpen()}}
                                    className="appointment_btn">BOOK APPOINTMENT
                                </button>
                            </div>
                        </div>
                    </div>
                    <AppointmentDialog openDialog={open} SetDialog={setOpen} AppInformation={AppInfo} SendDate={Value}/>
                </div>
            </section>
        </>
    );
};

export default AppointmentPage;