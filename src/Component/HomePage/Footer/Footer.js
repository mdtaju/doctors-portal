import React from 'react';
import Logo from '../../../Resources/images/doctors-portal.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer_main_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className='footer_categories'>
                                <img className='footer_logo' src={Logo} alt="Logo"/>
                                <p className='footer_paragraph'>Emergency Dental Care</p>
                                <p className='footer_paragraph'>Check Up</p>
                                <p className='footer_paragraph'>Treatment of Personal Diseases</p>
                                <p className='footer_paragraph'>Tooth Extraction</p>
                                <p className='footer_paragraph'>Check Up</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className='footer_categories'>
                                <h5 className="main_title footer_title">Services</h5>
                                <p className='footer_paragraph'>Emergency Dental Care</p>
                                <p className='footer_paragraph'>Check Up</p>
                                <p className='footer_paragraph'>Treatment of Personal Diseases</p>
                                <p className='footer_paragraph'>Tooth Extraction</p>
                                <p className='footer_paragraph'>Check Up</p>
                                <p className='footer_paragraph'>Check Up</p>
                                <p className='footer_paragraph'>Check Up</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className='footer_categories'>
                                <h5 className="main_title footer_title">Oral Health</h5>
                                <p className='footer_paragraph'>Emergency Dental Care</p>
                                <p className='footer_paragraph'>Check Up</p>
                                <p className='footer_paragraph'>Treatment of Personal Diseases</p>
                                <p className='footer_paragraph'>Tooth Extraction</p>
                                <p className='footer_paragraph'>Check Up</p>
                                <p className='footer_paragraph'>Check Up</p>
                                <p className='footer_paragraph'>Check Up</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className='footer_categories'>
                                <h5 className="main_title footer_title">Our Address</h5>
                                <p className='footer_paragraph_address'>New York - 101010 Hudson Yards</p>
                                <div className="footer_icon_main_container">
                                    <div className="footer_icon_container">
                                        <a href="https://www.facebook.com/mdtajuuddintarek/" rel="noreferrer" target="_blank"><FacebookIcon className='footer_icon'/></a> 
                                    </div>
                                    <div className="footer_icon_container">
                                        <a href="https://www.linkedin.com/in/mdtajuuddintarek/" rel="noreferrer" target="_blank"><LinkedInIcon className='footer_icon'/></a>
                                    </div>
                                    <div className="footer_icon_container">
                                        <a href="https://github.com/mdtaju" rel="noreferrer" target="_blank"><GitHubIcon className='footer_icon'/></a>
                                    </div>
                                </div><br/>
                                <p className="footer_paragraph_address">Call Now</p>
                                <button className="appointment_btn">+002 302 986</button>
                            </div>
                        </div>
                    </div>
                    <p className="footer_paragraph_center">Copyright &copy; 2020. All Right Reserve</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;