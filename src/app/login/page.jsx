import React from 'react';
import Plainlayout from '@/components/master/Plainlayout';
import Hero from '@/components/products/Hero';
import Shopbycategory from '@/components/products/shopbycategory';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Login from '@/components/user/Login';


const page = () => {
    return (
        <Plainlayout>
            <Hero />
            <Shopbycategory />
            <FeaturedProduct />
            <Login/>
        </Plainlayout>
    );
};

export default page;