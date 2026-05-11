 import CartList from '@/components/products/CartList';
 import Plainlayout from '@/components/master/Plainlayout';
import React from 'react';
import Hero from '@/components/products/Hero';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Shopbycategory from '@/components/products/Shopbycategory';
import WishList from '@/components/products/WishList'
import AddedCart from '@/components/master/AddedCart';
const page = () => {
    return (
        <Plainlayout>
            <AddedCart/>
            <FeaturedProduct />
            <WishList />
       </Plainlayout>
    );
};

export default page;