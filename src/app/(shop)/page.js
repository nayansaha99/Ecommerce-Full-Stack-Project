
import Masterlayout from '@/components/master/masterlayout';
import Hero from '@/components/products/Hero';
import Shopbycategory from '@/components/products/shopbycategory';
import FeaturedProduct from '@/components/products/FeaturedProduct';
const page = () => {
  
   return (
      <Masterlayout>
         <Hero />
         <Shopbycategory />
         <FeaturedProduct />
      </Masterlayout>
   );
};

export default page;