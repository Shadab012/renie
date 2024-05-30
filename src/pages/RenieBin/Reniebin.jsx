import React from 'react';
import '../../assets/css/home.css';
import Arrow from '../../assets/images/arrow.png';

import HeroSection from './components/HeroSection';

function Reniebin() {
  return (
    <div>
      <div className='heroSection'>
        <HeroSection />
      </div>
      {/* <div className='arrowSection flex justify-center md:hidden'>
        <img className='arrowImg' src={Arrow} alt='' />
      </div> */}
      {/* <div className='trustedBySection my-5'>
        <TrustedBy />
      </div>
      <div className='aboutSection mt-10 pt-10'>
        <About />
      </div>
      <div className='serviceCardsSection my-10'>
        <ServiceCards />
      </div>
      <div className='renieBinSection my-10 '>
        <ReniebinSection />
      </div>
      <div className='renieRewardSection flex justify-center items-center my-10'>
        <RenieRewardSection />
      </div>
      <div className='renieHubSection flex justify-center items-center '>
        <RenieHub />
      </div>
      <div className='adsMatterSection flex justify-center items-center'>
        <AdsMatter />
      </div>
      <div className='tellStorySection flex justify-center items-center'>
        <TellStory />
      </div>
      <div className='subcribCardsSection md:mb-10'>
        <SubscribCards />
      </div> */}
    </div>
  );
}

export default Reniebin;
