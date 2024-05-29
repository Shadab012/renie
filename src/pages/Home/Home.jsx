import React from 'react';
import '../../assets/css/home.css';
import Arrow from '../../assets/images/arrow.png';
import TrustedBy from '../../components/TrustedBy';
import About from './components/About';
import AdsMatter from './components/AdsMatter';
import HeroSection from './components/HeroSection';
import RenieBin from './components/RenieBin';
import RenieHub from './components/RenieHub';
import RenieRewardSection from './components/RenieRewardSection';
import ServiceCards from './components/ServiceCards';
import TellStory from './components/TellStory';

function Home() {
  return (
    <div>
      <div className='heroSection'>
        <HeroSection />
      </div>
      <div className='arrowSection flex justify-center md:hidden'>
        <img className='arrowImg' src={Arrow} alt='' />
      </div>
      <div className='trustedBySection my-5'>
        <TrustedBy />
      </div>
      <div className='aboutSection mt-10'>
        <About />
      </div>
      <div className='serviceCardsSection my-10'>
        <ServiceCards />
      </div>
      <div className='renieBinSection my-10 '>
        <RenieBin />
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
    </div>
  );
}

export default Home;
