import AddedCart from '@/components/master/AddedCart';
import Plainlayout from '@/components/master/Plainlayout';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Hero from '@/components/products/Hero';
import React from 'react';

const page = () => {
    return (
        <div>
            <Plainlayout>
                <AddedCart/>
                <FeaturedProduct/>
            </Plainlayout>
        </div>
    );
};

export default page;