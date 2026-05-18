import Masterlayout from '@/components/master/masterlayout';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Hero from '@/components/products/Hero';
import Shopbycategory from '@/components/products/Shopbycategory';
import RegOTP from '@/components/user/RegOTP';
import { cookies } from 'next/headers';
const page = async () => {
     const cookieStore =  await cookies();
     const otp = cookieStore.get('token')?.value;
    return (
        
         
        <Masterlayout>
            <Hero/>
            <Shopbycategory/>
            <FeaturedProduct/>
            <RegOTP otp={otp}/>
        </Masterlayout>
    );
};

export default page;