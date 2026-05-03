import React from 'react';
import Plainlayout from '@/components/master/Plainlayout';
import Hero from '@/components/products/Hero';
import Shopbycategory from '@/components/products/shopbycategory';
import FeaturedProduct from '@/components/products/FeaturedProduct';



 
 const page = () => {
    return (
       <Plainlayout>
         <Hero />
         <Shopbycategory />
         <FeaturedProduct/>
       </Plainlayout>
    );
 };
 
 export default page;