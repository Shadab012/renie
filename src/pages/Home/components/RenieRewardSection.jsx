import React from 'react';
import RewardImg from '../../../assets/images/reward-img.png';
function RenieRewardSection() {
  return (
    <div className='w-11/12 md:w-10/12  my-5  flex flex-col items-center md:flex-row md:gap-10 justify-center md:justify-between  mx-auto '>
      {' '}
      <div className='rewardImageSection'>
        <img className='rewardImg' src={RewardImg} alt='about image' />
      </div>
      <div className='w-10/12  md:w-6/12  p-4 flex flex-col justify-center gap-5 '>
        <div className='aboutTitleSection text-center md:text-left'>
          <span className='renieTitleText font-bold gradient-text'>
            Renie Rewards
          </span>{' '}
          <br />
          <span className='rewardTitleMain font-semibold gradient-text'>
            The modern waste solution <br /> to incentivize recycling behavior
          </span>
        </div>
        <div>
          <p className='aboutPeragraph font-normal text-center  md:text-left'>
            Ready to recycle, collect points and earn guaranteed rewards?
          </p>
        </div>
        <span className='reniebigImgText font-semibold text-center md:text-left'>
          Learn more {'>'}{' '}
        </span>
        {/* <div className='arrowSection relative w-full flex mx-10  hidden md:flex px-10 '>
          <img className='arrowImg absolute top-6' src={Arrow} alt='' />
        </div> */}
      </div>
    </div>
  );
}

export default RenieRewardSection;
