import React from 'react';
import '../../assets/css/reniebin.css';
import Arrow from '../../assets/images/arrow.png';

import HeroBin from './components/HeroBin';

function Reniebin() {
  return (
    <div>
      <div className='binHeroSection flex'>
        <HeroBin />
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
