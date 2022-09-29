import React from 'react';
import "../../Shared/Navigation/Navigation.js"
import Navigation from '../../Shared/Navigation/Navigation.js';
import AppoinmentBanner from '../ApointmentBanner/AppoinmentBanner.js';
import Banner from '../Banner/Banner.js';
import Services from '../Services/Services.js';
import Testimonials from '../Testimonials/Testimonials/Testimonials.js';
import Footer from './../../Footer/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppoinmentBanner></AppoinmentBanner>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;