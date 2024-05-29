import React from 'react';
import '../../assets/css/home.css';
import Arrow from '../../assets/images/arrow.png';
import TrustedBy from '../../components/TrustedBy';
import About from './components/About';
import HeroSection from './components/HeroSection';
import RenieBin from './components/RenieBin';
import ServiceCards from './components/ServiceCards';
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
    </div>
  );
}

export default Home;
