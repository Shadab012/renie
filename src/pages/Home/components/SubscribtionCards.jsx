import React from 'react';
import { Link } from 'react-router-dom';
import cardImg from '../../../assets/images/bin-1.png';
import StandardImg from '../../../assets/images/standardFeature.png';
function SubscribtionCards() {
  return (
    <div className=' border border-black flex  items-center md:flex-row  justify-center md:justify-between  mx-auto '>
      <div className='subscribImageSection'>
        <img className='subscribImg' src={cardImg} alt='' />
      </div>
      <div className='subscribCardsSection flex'>
        <div className='subscribCard flex flex-col justify-center items-start px-10'>
          <span className='cardTitle gradient-text font-semibold'>
            Renie Bin Standard
          </span>
          <p className='cardPrice'>
            {' '}
            <span className='price gradient-text font-semibold'>730 AED</span>/
            bin
          </p>
          <span className='cardTime font-semibold'>One time free</span>
          <img className='mt-10' src={StandardImg} alt='' />
          <div className='headerButton w-max flex items-center justify-center mt-10  '>
            <Link
              to='#'
              className='text-white  font-medium rounded-lg text-sm  '
            >
              Connect with an expert
            </Link>
          </div>
        </div>
        <div className='subscribCard'></div>
      </div>
    </div>
  );
}

export default SubscribtionCards;
