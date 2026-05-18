// import { cookies } from 'next/headers';
import Appnavbar from "@/components/master/Appnavbar";
import Footer from "@/components/master/Footer";
import { cookies } from "next/headers";

const Masterlayout = (props) => {
      const cookieStore = cookies()
      const token = cookieStore.get('token')
      let isLogin=false
      isLogin = typeof token !== "undefined";
    return (
        <>
            <Appnavbar isLogin={isLogin}/>
            {props.children}
            <Footer />
        </>
    );
};

export default Masterlayout;