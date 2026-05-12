
import Masterlayout from '@/components/master/masterlayout';

import Hero from '@/components/products/Hero';
import FeaturedProduct from '@/components/products/FeaturedProduct';
import Shopbycategory from '@/components/products/Shopbycategory';
import WishList from '@/components/products/WishList'
import AddedCart from '@/components/master/AddedCart';
const page = () => {
    return (
        <Masterlayout>
            <AddedCart/>
            <FeaturedProduct />
            <WishList />
       </Masterlayout>
    );
};

export default page;