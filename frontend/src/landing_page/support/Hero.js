import React from 'react';
function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h1 className='p-3'>Support Portal</h1>
                <a href='' className='p-3'>Track Tickets</a>
   </div>
   <div className='row p-3 m-5'>
               <div className='col-6 p-3'>
                <h1 className='fs-3'>Search for an answer or browse help topic to create a ticket</h1>
                <input placeholder='Eg:How do you fill F & O'/><br/>
                <a href=''>Track Account Opening</a>
                <a href=''>Track Segment Activation</a>
                <a href=''>Intraday Margins</a>
                <a href=''>Kite User Manual</a>
               </div>
               <div className='col-6 p-3'>
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li>
                <a href=''>Current Takeovers and Delisting-January 2024</a></li>
                <li><a href=''>Latest Intraday and Leverages-MIS & CO</a></li>
                </ol>
               </div>
   </div>
   </section>
      
    );
}

export default Hero;