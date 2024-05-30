import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../assets/css/style.css'; // Your custom styles
import binImg from '../../../assets/images/bin-1.png';
import cardIcons from '../../../assets/images/cardIcons.png';
import incomeIcon from '../../../assets/images/incomeCardIcon.png';
import Arrow from '../../../assets/images/arrow.png';

function CardSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=''>
      <div className='arrowSection flex justify-center  hidden md:flex'>
        <img className='arrowImg' src={Arrow} alt='' />
      </div>
      <div className='serviceTitle flex justify-center my-5'>
        {' '}
        <span className='serviceTitleText font-semibold gradient-text'>
          How it works{' '}
        </span>{' '}
      </div>
      <div className='cardsSection w-10/12 mx-auto hidden md:flex justify-between gap-5 my-5'>
        <div className='cardItem flex flex-col justify-center items-center rounded-lg gap-5 p-5'>
          <span className='cardTitle font-semibold gradient-text'>
            Data extraction
          </span>
          <img
            className='extractionCardImg'
            src={binImg}
            alt='Data extraction'
          />
          <p className='cardPeragraph px-5'>
            Renie Bins are engineered to extract data out of recyclable waste
            and pass it to our data monetization software
          </p>
        </div>

        <div className='cardItem flex flex-col justify-center items-center gap-5 p-5'>
          <span className='cardTitle font-semibold gradient-text'>
            Data monetization
          </span>
          <div className='cardIconsSection'>
            <img
              className='cardIconImg'
              src={cardIcons}
              alt='Data monetization'
            />
          </div>
          <p className='cardPeragraph px-5'>
            The data coming from Renie Bins is received by multiple Renie
            software solutions and monetized automatically
          </p>
        </div>

        <div className='cardItem flex flex-col justify-center items-center gap-10 p-5'>
          <span className='cardTitle font-semibold gradient-text'>Income</span>
          <img className='incomeCardImg my-10' src={incomeIcon} alt='Income' />
          <p className='cardPeragraph px-5'>
            Renie Bins are engineered to extract data out of recyclable waste
            and pass it to our data monetization software
          </p>
        </div>
      </div>

      <div className='md:hidden'>
        <Slider {...settings}>
          <div className='cardItem bg-no-repeat bg-cover flex flex-col justify-center items-center gap-5 p-5'>
            <span className='cardTitle font-semibold gradient-text'>
              Data extraction
            </span>
            <img
              className='extractionCardImg'
              src={binImg}
              alt='Data extraction'
            />
            <p className='cardPeragraph px-5'>
              Renie Bins are engineered to extract data out of recyclable waste
              and pass it to our data monetization software
            </p>
          </div>
          <div className='cardItem bg-no-repeat bg-cover flex flex-col justify-center items-center gap-5 p-5'>
            <span className='cardTitle font-semibold gradient-text'>
              Data monetization
            </span>
            <div className='cardIconsSection'>
              <img
                className='cardIconImg'
                src={cardIcons}
                alt='Data monetization'
              />
            </div>
            <p className='cardPeragraph px-5'>
              The data coming from Renie Bins is received by multiple Renie
              software solutions and monetized automatically
            </p>
          </div>
          <div className='cardItem bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10 p-5'>
            <span className='cardTitle font-semibold gradient-text'>
              Income
            </span>
            <img
              className='incomeCardImg my-10'
              src={incomeIcon}
              alt='Income'
            />
            <p className='cardPeragraph px-5'>
              Renie Bins are engineered to extract data out of recyclable waste
              and pass it to our data monetization software
            </p>
          </div>
        </Slider>
      </div>
      {/* I will fix this later */}
      <div className='arrowSection relative w-full flex justify-center mx-10  hidden md:flex px-10 '>
        <img className='arrowImg absolute top-6' src={Arrow} alt='' />
      </div>
    </div>
  );
}

export default CardSection;
