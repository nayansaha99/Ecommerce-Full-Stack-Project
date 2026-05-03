import React from 'react';
import Appnavbar from './Appnavbar';
import Footer from './footer';


const Plainlayout = (props) => {
  return (
    <>
      <Appnavbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Plainlayout;