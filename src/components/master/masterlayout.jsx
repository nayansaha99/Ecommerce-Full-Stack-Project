// import { cookies } from 'next/headers';
import Appnavbar from "@/components/master/Appnavbar";
import Footer from "@/components/master/Footer";

const Masterlayout = ({ children }) => {
    // const cookieStore = cookies();
    // const token = cookieStore.get('token');
    // console.log('token')
    // const isLogin = !!token?.value;
    return (
        <>
            <Appnavbar/>
            {children}
            <Footer />
        </>
    );
};

export default Masterlayout;