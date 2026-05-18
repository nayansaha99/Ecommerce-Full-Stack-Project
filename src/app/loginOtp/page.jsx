
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Hero from '@/components/products/Hero';
import Shopbycategory from '@/components/products/Shopbycategory';
import LoginOtp from '@/components/user/LoginOtp';
import Masterlayout from '@/components/master/masterlayout';
import Otpverification from '@/components/user/RegOTP';
import { cookies } from 'next/headers';


const page = async () => {
     const cookieStore =  await cookies();
     const loginotp = cookieStore.get('token')?.value;
    return (
        <Masterlayout>
            <Hero/>
            <Shopbycategory/>
            <FeaturedProduct/>
            <LoginOtp loginotp={loginotp}/>
        </Masterlayout>
    );
};

export default page;