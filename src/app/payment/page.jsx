import Plainlayout from '@/components/master/Plainlayout';
import Payment from '@/components/products/Payment';
import Hero from '@/components/products/Hero';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Shopbycategory from '@/components/products/Shopbycategory';

 
import React from 'react';
import { SuccessTrigger } from '@/components/master/SuccessTrigger';
import AddedCart from '@/components/master/AddedCart';

const page = () => {
    return (
        <Plainlayout>
            <AddedCart/>
            <FeaturedProduct />
            <Payment/>
        </Plainlayout>
    );
};

export default page;