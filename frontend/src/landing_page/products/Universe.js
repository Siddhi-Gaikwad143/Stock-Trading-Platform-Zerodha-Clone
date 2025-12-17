import React from 'react';
function Universe() {
    return (  
        <div className='container mt-5'>
          <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extending your trading and investment experience even further our platforms.</p>
      <div className='col-4 p-3 mt-5'>
            <img src="media\images\smallcaseLogo.png"/>
            <p className='text-small text-muted'>Themantic Investment Platform</p>
    </div>
    <div className='col-4 p-3 mt-5'>
            <img src="media\images\streakLogo.png" style={{height:"40%",width:"40%"}}/>
            <p className='text-small text-muted'>Streak Algo and Strategy Platform</p>
    </div>
    <div className='col-4 p-3 mt-5'>
            <img src="media\images\sensibullLogo.svg"/>
            <p className='text-small text-muted'>Option Trading Platform</p>
    </div>
    <div className='col-4 p-3 mt-5'>
            <img src="media\images\zerodhaFundhouse.png" style={{height:"40%",width:"40%"}}/>
            <p className='text-small text-muted'>Assest Management</p>
    </div>
    <div className='col-4 p-3 mt-5'>
            <img src="media\images\goldenpiLogo.png"/>
            <p className='text-small text-muted'>Bonds Trading Platform</p>
    </div>
    <div className='col-4 p-3 mt-5'>
            <img src="media\images\dittoLogo.png" style={{height:"40%",width:"40%"}}/>
            <p className='text-small text-muted'>insurance</p>
    </div>
    <button className='p-2 btn btn-primary fs-5 mb-5 text-center' style={{width:"20%",margin:"0 auto"}}>Sign up Now</button>
   </div>
    </div>
    );
}

export default Universe;