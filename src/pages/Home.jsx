import React from 'react';
import '../assets/css/home.css';
import Arrow from '../assets/images/arrow.png';
function Home() {
  return (
    <div className='heroSection flex flex-col justify-around  items-center  mt-5'>
      <div className='heroTitle'>
        <div className='heroTitleText'>
          {' '}
          <span className='transform'>Transform</span> <br />
          <span className='yourwaste'>your waste</span>
          <br />
          <span className='into'>into</span>
          <span className='income gradient-text'>income</span>{' '}
        </div>
        <button>now</button>
      </div>
      <div className='arrowSection'>
        <img className='arrowImg' src={Arrow} alt='' />
      </div>
    </div>
  );
}

export default Home;
