
import Masterlayout from '@/components/master/masterlayout';
import Hero from '@/components/products/Hero';
import Shopbycategory from '@/components/products/shopbycategory';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Login from '@/components/user/Login';


const page = () => {
    return (
        <Masterlayout>
            <Hero />
            <Shopbycategory />
            <FeaturedProduct />
            <Login/>
        </Masterlayout>
    );
};

export default page;