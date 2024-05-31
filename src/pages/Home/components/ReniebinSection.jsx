import React from 'react';
import binImg1 from '../../../assets/images/binIcon-1.png';
import binImg2 from '../../../assets/images/binIcon-2.png';
import binImg3 from '../../../assets/images/binIcon-3.png';
import binImg4 from '../../../assets/images/binIcon-4.png';
import binImg5 from '../../../assets/images/binIcon-5.png';
import binImg6 from '../../../assets/images/binIcon-6.png';
import binImg7 from '../../../assets/images/binIcon-7.png';
import binImg8 from '../../../assets/images/binIcon-8.png';
import binBigImg from '../../../assets/images/bin-1.webp';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ReniebinSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '-30px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className='renieMain contentSection h-full  w-10/12  mx-auto'>
      <div className='renieTitleSection mb-5 text-center '>
        <span className='renieTitleText font-bold gradient-text'>
          Renie Bin
        </span>{' '}
        <br />
        <span className='renieSubTitle font-semibold '>
          The ultimate data extraction machine
        </span>
      </div>
      <div className='dataSection flex flex-col md:flex-row w-full md:w-10/12 md:h-full justify-center md:justify-between mx-auto '>
        <div className='binIcons hidden md:flex flex-col justify-start gap-10 h-full mt-5'>
          <div className='iconItem flex flex-col items-center w-full'>
            <img className='iconImg' src={binImg1} alt='icon1' />
            <span className='iconText'>only accepts</span>
            <span className='iconTitle font-semibold gradient-text'>
              recyclable waste
            </span>
          </div>
          <div className='iconItem flex flex-col items-center w-full'>
            <img className='iconImg' src={binImg2} alt='icon2' />
            <span className='iconText'>only accepts</span>
            <span className='iconTitle font-semibold gradient-text'>
              recyclable waste
            </span>
          </div>
          <div className='iconItem flex flex-col items-center w-full'>
            <img className='iconImg' src={binImg3} alt='icon3' />
            <span className='iconText'>only accepts</span>
            <span className='iconTitle font-semibold gradient-text'>
              recyclable waste
            </span>
          </div>
          <div className='iconItem flex flex-col items-center w-full'>
            <img className='iconImg' src={binImg4} alt='icon4' />
            <span className='iconText'>only accepts</span>
            <span className='iconTitle font-semibold gradient-text'>
              recyclable waste
            </span>
          </div>
        </div>
        <div className='renieCenter flex flex-col items-center gap-5 mt-5'>
          <span className='reniebigImgText font-semibold'>
            Learn more {'>'}{' '}
          </span>
          <img className='renieCenteredImg' src={binBigImg} alt='bin' />
        </div>
        <div className='binIcons hidden md:flex flex-col justify-start gap-10 h-full mt-5'>
          <div className='iconItem flex flex-col items-center w-full'>
            <img className='iconImg' src={binImg5} alt='icon5' />
            <span className='iconText'>only accepts</span>
            <span className='iconTitle font-semibold gradient-text'>
              recyclable waste
            </span>
          </div>
          <div className='iconItem flex flex-col items-center w-full'>
            <img className='iconImg' src={binImg6} alt='icon6' />
            <span className='iconText'>only accepts</span>
            <span className='iconTitle font-semibold gradient-text'>
              recyclable waste
            </span>
          </div>
          <div className='iconItem flex flex-col items-center w-full'>
            <img className='iconImg' src={binImg7} alt='icon7' />
            <span className='iconText'>only accepts</span>
            <span className='iconTitle font-semibold gradient-text'>
              recyclable waste
            </span>
          </div>
          <div className='iconItem flex flex-col items-center w-full'>
            <img className='iconImg' src={binImg8} alt='icon8' />
            <span className='iconText'>only accepts</span>
            <span className='iconTitle font-semibold gradient-text'>
              recyclable waste
            </span>
          </div>
        </div>
        {/* this will be visible only on mobile */}
        <div className='md:hidden w-full mt-10'>
          <Slider {...settings}>
            <div className='iconItem flex flex-col items-center justify-center w-full'>
              <img className='iconImg' src={binImg1} alt='icon1' />
              <span className='iconText'>only accepts</span>

              <span className='iconTitle font-semibold gradient-text'>
                recyclable waste
              </span>
            </div>
            <div className='iconItem flex flex-col items-center w-full'>
              <img className='iconImg' src={binImg2} alt='icon2' />
              <span className='iconText'>only accepts</span>
              <span className='iconTitle font-semibold gradient-text'>
                recyclable waste
              </span>
            </div>
            <div className='iconItem flex flex-col items-center w-full'>
              <img className='iconImg' src={binImg3} alt='icon3' />
              <span className='iconText'>only accepts</span>
              <span className='iconTitle font-semibold gradient-text'>
                recyclable waste
              </span>
            </div>
            <div className='iconItem flex flex-col items-center w-full'>
              <img className='iconImg' src={binImg4} alt='icon4' />
              <span className='iconText'>only accepts</span>
              <span className='iconTitle font-semibold gradient-text'>
                recyclable waste
              </span>
            </div>
            <div className='iconItem flex flex-col items-center w-full'>
              <img className='iconImg' src={binImg5} alt='icon5' />
              <span className='iconText'>only accepts</span>
              <span className='iconTitle font-semibold gradient-text'>
                recyclable waste
              </span>
            </div>
            <div className='iconItem flex flex-col items-center w-full'>
              <img className='iconImg' src={binImg6} alt='icon6' />
              <span className='iconText'>only accepts</span>
              <span className='iconTitle font-semibold gradient-text'>
                recyclable waste
              </span>
            </div>
            <div className='iconItem flex flex-col items-center w-full'>
              <img className='iconImg' src={binImg7} alt='icon7' />
              <span className='iconText'>only accepts</span>
              <span className='iconTitle font-semibold gradient-text'>
                recyclable waste
              </span>
            </div>
            <div className='iconItem flex flex-col items-center w-full'>
              <img className='iconImg' src={binImg8} alt='icon8' />
              <span className='iconText'>only accepts</span>
              <span className='iconTitle font-semibold gradient-text'>
                recyclable waste
              </span>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ReniebinSection;
