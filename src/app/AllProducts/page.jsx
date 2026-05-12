import AddedCart from '@/components/master/AddedCart';
import Masterlayout from '@/components/master/masterlayout';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Hero from '@/components/products/Hero';
import { cookies } from 'next/headers';
import React from 'react';

const page = async () => {

    return (
        <div>
            <Masterlayout>
                <AddedCart />
                <FeaturedProduct/>
            </Masterlayout>
        </div>
    );
};

export default page;