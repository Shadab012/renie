import React from 'react';
import { Link } from 'react-router-dom';
import cardImg from '../../../assets/images/bin-1.png';
import StandardImg from '../../../assets/images/standardFeature.png';
function SubscribCards() {
  return (
    <div className=' w-10/12 contentSection flex  gap-10 items-center md:items-end flex-col md:flex-row  justify-center md:justify-between  mx-auto '>
      <div className='subscribImageSection flex flex-col gap-5 justify-center items-center h-full'>
        <div className='imageTitle flex flex-col justify-center w-full'>
          <span className='imageTitleText gradient-text'>
            Get your <br /> Renie Bin
          </span>
          <br />
          <span className='imageTitleTime '>Today</span>
        </div>
        <img className='subscribImg' src={cardImg} alt='' />
      </div>
      <div className='subscribCardsSection flex md:flex-row flex-col md:items-end'>
        <div className='standardCard  flex flex-col justify-center items-start px-10 md:mb-0 mb-5'>
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
        <div className='customCard relative rounded-xl hover:rounded-sm flex flex-col justify-center items-start px-10 mt-10 md:mt-0'>
          <div className='mostPopularLabel font-semibold text-white rounded-md flex justify-center items-center '>
            MOST POPULAR
          </div>
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
      </div>
    </div>
  );
}

export default SubscribCards;
