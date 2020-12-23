import React, { useEffect } from 'react';
import DoctorsImage from '../../../Resources/images/5790-removebg.png';
import './HomeAppointment.css'

const HomeAppointment = () => {
    useEffect(() => {
        window.AOS.init({
            duration: 2000
        })
    }, [])
    return (
        <>
            <section className="homeAppointment_main_container">
                <div className="homeAppointment_main_aria">
                    <div className="row homeAppointment_row">
                        <div className="col-lg-5 col-md-12">
                            <div className='homeAppointment_image_aria'>
                                <img src={DoctorsImage} alt="DoctorImage"/>
                            </div>
                        </div>
                        <div data-aos="zoom-in-down" className="col-lg-7 col-md-12">
                            <div className='homeAppointment_text_aria'>
                                <h5>Appointment</h5>
                                <h1>Make An Appointment Today</h1>
                                <p className="paragraph_gray">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore praesentium dolor fugiat vitae nemo perferendis?
                                </p>
                                <button className="appointment_btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeAppointment;