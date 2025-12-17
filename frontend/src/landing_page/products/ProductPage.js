import React from 'react';
import Hero from '../products/Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return (  
        <>
        <Hero/>
        <LeftSection imageURL="media/images/kite.png"
         productName="Kite" 
         productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ui, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
         tryDemo=""
         learnMore="" 
         googlePlay=""
         appStore=""
        />
        <RightSection imageURL="media\images\console.png"
         productName="Console" 
         productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ui, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
         learnMore="" 
        />
         <LeftSection imageURL="media\images\coin.png"
         productName="Coin" 
         productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ui, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
         tryDemo=""
         learnMore="" 
         googlePlay=""
         appStore=""
        />
        <RightSection imageURL="media\images\kiteconnect.png"
         productName="Kite Connect API" 
         productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ui, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
         learnMore="" 

        />
         <LeftSection imageURL="media\images\varsity.png"
         productName="Varsity Mobile" 
         productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ui, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
         tryDemo=""
         learnMore="" 
         googlePlay=""
         appStore=""
        />
        <p className='text-center mt-5 mb-5'>Want to know more about the technology stack? Check out the Zerodha tech app.</p>
        <Universe/>
        </>
    );
}

export default ProductPage;