import React from 'react';
import '../assets/css/home.css';
import Arrow from '../assets/images/arrow.png';
function Home() {
  return (
    <div className='heroSection flex flex-col justify-between py-10  items-center  mt-10'>
      <div className='heroTitle flex flex-col gap-10 mt-10'>
        <div className='heroTitleText'>
          {' '}
          <span className='transform'>Transform</span> <br />
          <span className='yourwaste'>your waste</span>
          <br />
          <span className='into'>into</span>
          <span className='income gradient-text'>income</span>{' '}
        </div>
        <div className='flex justify-center md:mt-5'>
          <button className='heroButton text-white'>See how</button>
        </div>
      </div>
      <div className='arrowSection mb-10'>
        <img className='arrowImg' src={Arrow} alt='' />
      </div>
    </div>
  );
}

export default Home;
