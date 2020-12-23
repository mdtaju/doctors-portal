import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Resources/images/doctors-portal-white.png';
import Authentication from '../SignUp/Authentication';
import AppsIcon from '@material-ui/icons/Apps';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingChild from './SettingChild';

const Setting = () => {
    const Auth = Authentication();
    return (
        <>
            <section>
                <div className="row dashboard_main_container">
                <div className="col-lg-3 col-md-4 col-sm-12 dashboard_menu_main_container">
                        <div className="dashboard_menu_main_aria">
                            <div id='dashboard_logo'>
                                <Link to="/"><img src={Logo} alt="Logo"/></Link>
                            </div>
                            <ul className='dashboard_nav_list'>
                                <li><NavLink exact activeClassName='slider_active_class' to='/dashboard' className="dashboard_nav_link" ><AppsIcon /> Dashboard</NavLink></li>
                                <li><NavLink exact activeClassName='slider_active_class' to='/appointments' className="dashboard_nav_link" ><DateRangeIcon /> Appointments</NavLink></li>
                                <li><NavLink exact activeClassName='slider_active_class' to='/patients' className="dashboard_nav_link" ><PeopleOutlineIcon /> Patients</NavLink></li>
                                <li><NavLink exact activeClassName='slider_active_class' to='/prescription' className="dashboard_nav_link" ><DescriptionIcon /> Prescription</NavLink></li>
                                <li><NavLink exact activeClassName='slider_active_class' to='/setting' className="dashboard_nav_link" ><SettingsIcon /> Setting</NavLink></li>
                            </ul>
                            <div className="dashboard_logout_icon">
                                <p onClick={Auth.SignOutAccount}><ExitToAppIcon /> Sign Out</p>
                            </div>
                        </div>
                        <div className='dashboard_navbar'>
                            <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
                                <Link to='/' className="navbar-brand" ><img src={Logo} alt="Logo"/></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/dashboard' className="nav-link hvr-underline-from-center" >Dashboard</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/appointments' className="nav-link hvr-underline-from-center" >Appointments</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/patients' className="nav-link hvr-underline-from-center" >Patients</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/prescription' className="nav-link hvr-underline-from-center" >Prescription</NavLink>
                                        </li> 
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='slider_active_class' to='/setting' className="nav-link hvr-underline-from-center" >Setting</NavLink>
                                        </li>
                                        <li className="nav-item nav_item_hide">
                                            <span onClick={Auth.SignOutAccount} className="nav-link hvr-underline-from-center" >Sign out</span>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-8 col-sm-12'>
                        <div className="dashboard_list_main_container">
                            <h3>Setting</h3>
                            <SettingChild />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Setting;