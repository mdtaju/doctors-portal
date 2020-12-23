import React, { useEffect } from 'react';
import TesEllipse from '../../../Resources/images/Ellipse 1.png';
import TesEllipse2 from '../../../Resources/images/Ellipse 2.png';
import TesEllipse3 from '../../../Resources/images/Ellipse 3.png';
import Testimonial from '../../../Resources/images/testimonial2.png';
import './HomeTestimonial.css'

const HomeTestimonial = () => {
    useEffect(() => {
        window.AOS.init({
            duration: 2000
        })
    }, [])
    return (
        <>
            <section className="container">
                <div className="homeTestimonial_main_aria">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5 className='main_title'>TESTIMONIAL</h5>
                            <h1>What's Our Patients Says</h1>
                        </div>
                        <div>
                            <img src={Testimonial} alt="Testimonial"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div data-aos="flip-down" className="homeTestimonial_categories">
                                <p className="paragraph_gray">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa illo nemo velit fuga. Itaque aperiam ab ut, obcaecati placeat voluptates tempora atque doloremque debitis. Deserunt facere repudiandae quo ex?
                                </p>
                                <div className="homeTestimonial_ellipse_aria">
                                    <img src={TesEllipse} alt="Ellipse"/>
                                    <div>
                                        <h5>Winson Herry</h5>
                                        <p>
                                            California
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div data-aos="flip-down" className="homeTestimonial_categories">
                                <p className="paragraph_gray">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa illo nemo velit fuga. Itaque aperiam ab ut, obcaecati placeat voluptates tempora atque doloremque debitis. Deserunt facere repudiandae quo ex?
                                </p>
                                <div className="homeTestimonial_ellipse_aria">
                                    <img src={TesEllipse2} alt="Ellipse"/>
                                    <div>
                                        <h5>Winson Herry</h5>
                                        <p>
                                            California
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 homeTestimonial_categories_center">
                            <div data-aos="flip-down" className="homeTestimonial_categories">
                                <p className="paragraph_gray">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa illo nemo velit fuga. Itaque aperiam ab ut, obcaecati placeat voluptates tempora atque doloremque debitis. Deserunt facere repudiandae quo ex?
                                </p>
                                <div className="homeTestimonial_ellipse_aria">
                                    <img src={TesEllipse3} alt="Ellipse"/>
                                    <div>
                                        <h5>Winson Herry</h5>
                                        <p>
                                            California
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTestimonial;