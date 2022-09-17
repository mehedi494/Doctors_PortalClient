import React from 'react';
import "../../Shared/Navigation/Navigation.js"
import Navigation from '../../Shared/Navigation/Navigation.js';
import AppoinmentBanner from '../ApointmentBanner/AppoinmentBanner.js';
import Banner from '../Banner/Banner.js';
import Services from '../Services/Services.js';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;