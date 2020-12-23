import React from 'react';
import DentalTerms from './DentalTerms/DentalTerms';
import Footer from './Footer/Footer';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import HomeBlog from './HomeBlog/HomeBlog';
import HomeContactUs from './HomeContactUs/HomeContactUs';
import HomeDoctor from './HomeDoctor/HomeDoctor';
import HomeTestimonial from './HomeTestimonial/HomeTestimonial';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const HomePage = () => {
    return (
        <>
            <Slider />
            <Services />
            <DentalTerms />
            <HomeAppointment />
            <HomeTestimonial />
            <HomeBlog />
            <HomeDoctor />
            <HomeContactUs />
            <Footer />
        </>
    );
};

export default HomePage;