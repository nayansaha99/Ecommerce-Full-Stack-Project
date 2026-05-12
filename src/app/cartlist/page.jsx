import CartList from '@/components/products/CartList';
import Masterlayout from '@/components/master/masterlayout';
import Hero from '@/components/products/Hero';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Shopbycategory from '@/components/products/Shopbycategory';
import ProductDetails from '@/components/products/ProductDetails';
import AddedCart from '@/components/master/AddedCart';
import { cookies } from 'next/headers';

const page = async () => {
 
    return (
        <Masterlayout>
            <AddedCart />
            <FeaturedProduct />
            <CartList />
        </Masterlayout>
    );
};

export default page;