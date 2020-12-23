import React from 'react';
import './HomeContactUs.css'

const HomeContactUs = () => {
    const FormSubmit = (e) => {
        e.target.reset()
        e.preventDefault()
    }
    return (
        <>
            <section className="homeContact_main_container">
                <h5 className="main_title">CONTACT US</h5>
                <h1>Always Connect With Us</h1>
                <form onSubmit={FormSubmit} className='homeContact_form_container'>
                    <input type="email" name="email" className='homeContact_input' placeholder='Email Address*' required/>
                    <input type="text" name="text" className='homeContact_input' placeholder='Subject*' required/>
                    <textarea name="Your Message" placeholder='Your Message*' className='homeContact_input_message' required></textarea>
                    <input type="submit" className='form_submit' value="SUBMIT"/>
                </form>
            </section>
        </>
    );
};

export default HomeContactUs;