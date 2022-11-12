import React from 'react';
import Hero from './Hero';
import HomeAppointments from './HomeAppointments';
import Promotional from './Promotional';
import Services from './Services';
import Stats from './Stats';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero />
            <Stats />
            <Services />
            <Promotional />
            <HomeAppointments />
        </div>
    );
};

export default Home;