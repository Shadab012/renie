import React from 'react';
import AboutImg from '../../../assets/images/aboutImg.png';
import Arrow from '../../../assets/images/arrow.png';
function About() {
  return (
    <div className='contentSection w-11/12 md:w-10/12 flex flex-col items-center md:flex-row md:gap-10 justify-center md:justify-between  mx-auto '>
      <div className='imageSection'>
        <img className='aboutImg' src={AboutImg} alt='about image' />
      </div>
      <div className='w-full md:w-8/12  p-4 flex flex-col justify-center gap-5 '>
        <div className='aboutTitleSection text-center md:text-left'>
          <span className='aboutTitleTop font-semibold'>
            Turn your waste into income
          </span>{' '}
          <br />
          <span className='aboutTitleMain font-semibold gradient-text'>
            with Renie’s Technology
          </span>
        </div>
        <div>
          <p className='aboutPeragraph font-normal text-center md:text-left'>
            We transform your company’s waste from a cost into a source of
            income with Renie Bins. Our innovative bins collect data from your
            waste, feeding it into Renie’s data monetization software to uncover
            new revenue opportunities. With Renie Bins, your business’s waste
            becomes a valuable asset, turning waste management into a profitable
            venture.
          </p>
        </div>
        {/* <div className='arrowSection relative w-full flex mx-10  hidden md:flex px-10 '>
          <img className='arrowImg absolute top-6' src={Arrow} alt='' />
        </div> */}
      </div>
    </div>
  );
}

export default About;
