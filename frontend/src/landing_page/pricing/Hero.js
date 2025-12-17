import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted  mt-5 fs-5'>Free Equality investment and flat 20RS Trady and F and Q Trades.</h3>
  </div>
  <div className='row p-5 mt-5 text-center'>
    <div className="col-4 p-4">
    <img src='media\images\pricingEquity.svg' />
    <h1 className='fs-3'>Free Equity Delivery</h1>
    <p className='text-muted'>All equity delivery investments(NSE,BSE) are absolutely free-0RS brokerage.</p>
    </div>
    <div className="col-4 p-4">
    <img src='media\images\intradayTrades.svg'/>
    <h1 className='fs-3'>Intraday F & O Trades</h1>
    <p className='text-muted'>All equity delivery investments(NSE,BSE) are absolutely free-0RS brokerage.</p>
    </div>
    <div className="col-4 p-4">
    <img src='media\images\pricingEquity.svg'/>
    <h1 className='fs-3'>Free Direct MF</h1>
    <p className='text-muted'>All equity delivery investments(NSE,BSE) are absolutely free-0RS brokerage.</p>
    </div>

                 </div>
                 </div>
                
     );
}

export default Hero;
