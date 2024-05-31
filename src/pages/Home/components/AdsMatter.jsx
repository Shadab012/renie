import React from 'react';
import MobileImg from '../../../assets/images/mobile.png';
function AdsMatter() {
  return (
    <div className='contentSection w-11/12 md:w-10/12  my-5 items-center flex flex-col md:flex-row-reverse md:gap-10 justify-center md:justify-between  mx-auto '>
      {' '}
      <div className='rewardImageSection'>
        <img className='adsImg' src={MobileImg} alt='about image' />
      </div>
      <div className='w-10/12  md:w-6/12  p-4 flex flex-col justify-center gap-5 '>
        <div className='aboutTitleSection text-center md:text-left'>
          <span className='adsTitleText font-bold gradient-text'>
            Ads That Matter
          </span>{' '}
          <br />
          <span className='rewardTitleMain font-semibold gradient-text'>
            AI powered targeted campaigns <br className='hidden md:block' />{' '}
            based on consumer habits
          </span>
        </div>
        <div>
          <p className='aboutPeragraph font-normal text-center  md:text-left'>
            Powered by real-time data from thousands of Renie bins, our
            AI-driven advertising platform delivers targeted mobile ads to
            preferred audiences in countless locations every day. ensuring your
            ads reach the right people, at the right time, in the right place.
          </p>
        </div>
        <span className='reniebigImgText font-semibold text-center md:text-left'>
          Learn more {'>'}{' '}
        </span>
      </div>
    </div>
  );
}

export default AdsMatter;
