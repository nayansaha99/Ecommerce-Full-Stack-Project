
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Hero from '@/components/products/Hero';
import Shopbycategory from '@/components/products/Shopbycategory';
import LoginOtpverification from '@/components/user/LoginOtpverification';
import Masterlayout from '@/components/master/masterlayout';
import Otpverification from '@/components/user/Otpverification';
import { cookies } from 'next/headers';


const page = async () => {
     const cookieStore =  await cookies();
     const loginotp = cookieStore.get('token')?.value;
    return (
        
         
        <Masterlayout>
            <Hero/>
            <Shopbycategory/>
            <FeaturedProduct/>
            <LoginOtpverification loginotp={loginotp}/>
        </Masterlayout>
    );
};

export default page;