
import Payment from '@/components/products/Payment';
import Hero from '@/components/products/Hero';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Shopbycategory from '@/components/products/Shopbycategory';
import { SuccessTrigger } from '@/components/master/SuccessTrigger';
import AddedCart from '@/components/master/AddedCart';
import Masterlayout from '@/components/master/masterlayout';

const page = () => {
    return (
        <Masterlayout>
            <AddedCart/>
            <FeaturedProduct />
            <Payment/>
        </Masterlayout>
    );
};

export default page;