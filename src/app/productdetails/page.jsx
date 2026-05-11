import Plainlayout from '@/components/master/Plainlayout';
import ProductDetails from '@/components/products/ProductDetails';
import Footer from '@/components/master/Footer';
import React from 'react';

const page = () => {
    return (
        <>
            
            <ProductDetails />
             <Footer/>
        </>
    );
};

export default page;