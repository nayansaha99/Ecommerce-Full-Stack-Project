 import Appnavbar from '@/components/master/Appnavbar';
import Footer from '@/components/master/footer';
import Plainlayout from '@/components/master/Plainlayout';
import React from 'react';
 
 const page = () => {
    return (
       <Plainlayout>
        <Appnavbar/>
        <Footer/>
       </Plainlayout>
    );
 };
 
 export default page;