import React from 'react';
import Doctor1 from '../../../Resources/images/doctor_PNG16007.png';
import Doctor2 from '../../../Resources/images/PngItem_4554771.png';
import Doctor3 from '../../../Resources/images/unnamed.png';
import './HomeDoctor.css'

const HomeDoctor = () => {
    return (
        <>
            <section className="container">
                <div className="homeDoctor_main_aria">
                    <h5 className='main_title home_doctors_title'>OUR DOCTORS</h5>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='HomeDoctor_categories'>
                                <div className="homeDoctors_categories_img">
                                    <img src={Doctor1} alt="DoctorImage"/>
                                </div>
                                <h5>Dr. Jon Doe</h5>
                                <p>+001 239 947 885</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='HomeDoctor_categories'>
                                <div className="homeDoctors_categories_img">
                                    <img src={Doctor2} alt="DoctorImage"/>
                                </div>
                                <h5>Dr. Stripper</h5>
                                <p>+001 239 947 885</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 HomeDoctor_categories_center">
                            <div className='HomeDoctor_categories'>
                                <div className="homeDoctors_categories_img">
                                    <img src={Doctor3} alt="DoctorImage"/>
                                </div>
                                <h5>Dr. Biden</h5>
                                <p>+001 239 947 885</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeDoctor;