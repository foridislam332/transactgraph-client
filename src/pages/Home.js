import React from 'react';
import About from '../sections/About';
import Contact from '../sections/Contact';
import HeroBanner from '../sections/HeroBanner';
import Services from '../sections/Services';

const Home = () => {
    return (
        <>
            <HeroBanner />
            <About />
            <Services />
            <Contact />
        </>
    );
};

export default Home;