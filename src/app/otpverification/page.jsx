import Plainlayout from '@/components/master/Plainlayout';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Hero from '@/components/products/Hero';
import Shopbycategory from '@/components/products/Shopbycategory';
import Otpverification from '@/components/user/Otpverification';
import { cookies } from 'next/headers';
import React from 'react';

const page = async () => {
     const cookieStore =  await cookies();
     const otp = cookieStore.get('token')?.value;
    return (
        
         
        <Plainlayout>
            <Hero/>
            <Shopbycategory/>
            <FeaturedProduct/>
            <Otpverification otp={otp}/>
        </Plainlayout>
    );
};

export default page;