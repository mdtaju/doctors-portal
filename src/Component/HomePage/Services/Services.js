import React, { useEffect } from 'react';
import ToothImage from '../../../Resources/images/001-dental.png';
import ToothImage2 from '../../../Resources/images/tooth (1).png';
import ToothImage3 from '../../../Resources/images/tooth.png';
import './Services.css'

const Services = () => {
    useEffect(() => {
        window.AOS.init({
            duration: 2000
          });
    }, [])
    return (
        <>
            <section className="container">
                <div className="services_main_area">
                    <h5 className='services_main_area_title'>OUR SERVICES</h5>
                    <h1>Services We Provide</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div data-aos="zoom-in" className='services_categories'>
                                <img src={ToothImage} alt="ToothImage"/>
                                <h5>Fluoride Treatment</h5>
                                <p className='paragraph_gray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis provident sequi dolorum temporibus quasi. Alias.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div data-aos="zoom-in" className='services_categories'>
                                <img src={ToothImage2} alt="ToothImage"/>
                                <h5>Cavity Filling</h5>
                                <p className='paragraph_gray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis provident sequi dolorum temporibus quasi. Alias.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 services_categories_center">
                            <div data-aos="zoom-in" className='services_categories'>
                                <img src={ToothImage3} alt="ToothImage"/>
                                <h5>Teat Whitening</h5>
                                <p className='paragraph_gray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis provident sequi dolorum temporibus quasi. Alias.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;