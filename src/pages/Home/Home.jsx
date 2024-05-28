import React from 'react';
import '../../assets/css/home.css';
import Arrow from '../../assets/images/arrow.png';
import TrustedBy from '../../components/TrustedBy';
import HeroSection from './components/HeroSection';
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
    </div>
  );
}

export default Home;
