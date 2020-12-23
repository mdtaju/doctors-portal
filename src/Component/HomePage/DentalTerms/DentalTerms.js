import React from 'react';
import DentalImage from '../../../Resources/images/Mask Group 3.png';
import './DentalTerms.css'

const DentalTerms = () => {
    return (
        <>
            <section className="container">
                <div className="dentalTerms_main_aria">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-sm-12">
                            <div className='dentalTerms_img_container'>
                                <img src={DentalImage} alt="DentalImage"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div>
                                <h1>Exceptional Dental Care, on Your Terms</h1>
                                <p className='paragraph_gray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam aliquam deserunt impedit ex natus, incidunt maxime nulla dignissimos amet architecto dicta, blanditiis harum fugiat minus omnis dolorum. Velit, laudantium explicabo porro aperiam nam dicta quod eos alias cumque rem totam cupiditate quasi harum perspiciatis mollitia veritatis sint, repudiandae omnis sit labore in, autem aspernatur dignissimos! Id ab laboriosam qui perferendis, officia at pariatur placeat repudiandae! Autem eveniet expedita iste velit obcaecati dolore, maiores quaerat ab quae. Officiis, tempora fuga.</p>
                                <button className="appointment_btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DentalTerms;