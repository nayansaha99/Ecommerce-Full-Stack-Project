import React from 'react';
import Appnavbar from './Appnavbar';
import Footer from './footer';
import Hero from '../products/Hero';

const Plainlayout = () => {
    return (
        <>
            <Appnavbar />
             <Hero />
            <Footer />
        </>
    );
};

export default Plainlayout;