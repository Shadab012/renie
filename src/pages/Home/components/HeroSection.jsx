import React from 'react';
import '../../../assets/css/home.css';
import Arrow from '../../../assets/images/arrow.png';
import Circle from '../../../assets/images/round-2.png';
import RoundedIcon from '../../../assets/images/round-1.png';
function HeroSection() {
  return (
    <div className='flex flex-col gap-5 '>
      <div className='heroMain flex flex-col md:flex-row  justify-center py-5 md:py-10 gap-5 md:gap-10  w-10/12 mx-auto mb-5'>
        <div className='mobileCircle  flex justify-start items-start  w-full '>
          <img className='bigCircle' src={Circle} alt='' />
        </div>
        <div className='heroTitle flex flex-col jsutify-center items-center gap-5 md:gap-10  md:mt-10'>
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
        <div className='mobileRounded flex items-end justify-end  w-full '>
          <img className='roundedIcon' src={RoundedIcon} alt='' />
        </div>
      </div>
      <div className='arrowSection flex justify-center mb-10 hidden md:flex'>
        <img className='arrowImg' src={Arrow} alt='' />
      </div>
    </div>
  );
}

export default HeroSection;
