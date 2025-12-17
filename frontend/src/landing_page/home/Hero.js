import React from 'react';
function Hero() {
    return ( 
       <div className="Container p-5 mb-5">
        <div className="row text-center">
            <div className="col">
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' style={{width:"100%"}}/>
            </div>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign up Now</button>
        </div>
       </div>
     );
}

export default Hero;