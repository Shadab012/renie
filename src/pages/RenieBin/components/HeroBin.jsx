import React from 'react';
import '../../../assets/css/home.css';
// import Arrow from '../../../assets/images/arrow.png';
// import Circle from '../../../assets/images/round-2.png';
import RoundedIcon from '../../../assets/images/round-1.png';
import HeroImg from '../../../assets/images/binHero.png';
function HeroBin() {
  return (
    <div className='w-11/12 md:w-10/12  my-5 items-center flex flex-col md:flex-row md:gap-5 justify-center md:justify-between  mx-auto '>
      {' '}
      <div className='w-10/12  md:w-6/12 flex flex-col justify-between'>
        <div className='  p-4 flex flex-col justify-start gap-5 h-3/5 '>
          <div className='aboutTitleSection text-center md:text-left'>
            <span className='adsTitleText font-bold gradient-text'>
              Your waste
            </span>{' '}
            <br />
            <span className='rewardTitleMain font-semibold gradient-text'>
              supercharged with <br className='hidden md:block' />
            </span>
            <span>Data</span>
          </div>
          <div>
            <p className='aboutPeragraph font-normal text-center  md:text-left'>
              Powered by real-time data from thousands of Renie bins, our
              AI-driven advertising platform delivers targeted mobile ads to
              preferred audiences in countless locations every day. ensuring
              your ads reach the right people, at the right time, in the right
              place.
            </p>
          </div>
        </div>
        {/* Rounded Icon this will only visible on large screen*/}
        <div className='roundedIcon'>icon</div>
        {/* End */}
      </div>
      <div className='rewardImageSection w-10/12  md:w-6/12'>
        <img className='heroImg' src={HeroImg} alt='about image' />
      </div>
    </div>
  );
}

export default HeroBin;
