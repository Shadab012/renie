import React from 'react';
import '../../../assets/css/home.css';
import Arrow from '../../../assets/images/arrow.png';
import Circle from '../../../assets/images/circle.png';
import RoundedIcon from '../../../assets/images/roundIcon.png';
function HeroSection() {
  return (
    <div className='heroSection flex flex-col justify-center py-5 md:py-10 gap-5 md:gap-10 items-center  '>
      <div className='mobileCircle  flex justify-start md:hidden w-full px-10'>
        <img className='bigCircle' src={Circle} alt='' />
        <img className='smallCircle' src={Circle} alt='' />
      </div>
      <div className='heroTitle flex flex-col gap-5 md:gap-10  md:mt-10'>
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
      <div className='mobileRounded flex justify-end md:hidden w-full px-10'>
        <img className='roundedIcon' src={RoundedIcon} alt='' />
      </div>
      <div className='arrowSection mb-10 hidden md:flex'>
        <img className='arrowImg' src={Arrow} alt='' />
      </div>
    </div>
  );
}

export default HeroSection;
