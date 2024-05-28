import React from 'react';
import binImg from '../../../assets/images/bin-1.png';
function ServiceCards() {
  return (
    <div className='text-black font-bolder w-10/12 border border-black mx-auto my-10'>
      <div className='serviceTitle flex justify-center'>
        <span className='serviceTitleText font-semibold gradient-text'>
          How it works
        </span>
      </div>
      <div className='cardsSection flex justify-center gap-5 my-5'>
        <div className='cardItem  flex flex-col justify-center items-center gap-5 p-5'>
          <span className='cardTitle font-semibold gradient-text'>
            Data extraction
          </span>
          <img className='extractionCardImg' src={binImg} alt='' />
          <p className='cardPeragraph px-5'>
            Renie Bins are engineered to extract data out of recyclable waste
            and pass it to our data monetization software
          </p>
        </div>
        <div className='cardItem'>
          <div className='cardItem  flex flex-col justify-center items-center gap-5 p-5'>
            <span className='cardTitle font-semibold gradient-text'>
              Data monetization
            </span>
            <div className='cardIconsSection'>
              <div className='cardIcon flex items-center  gap-5'>
                <img
                  className='icon w-10 h-10 rounded-full'
                  src={binImg}
                  alt=''
                />
                <span>text</span>
              </div>
              <div>2</div>
              <div>3</div>
            </div>
            <p className='cardPeragraph px-5'>
              Renie Bins are engineered to extract data out of recyclable waste
              and pass it to our data monetization software
            </p>
          </div>
        </div>

        <div className='cardItem  flex flex-col justify-center items-center gap-5 p-5'>
          <span className='cardTitle font-semibold gradient-text'>
            Data extraction
          </span>
          <img className='extractionCardImg' src={binImg} alt='' />
          <p className='cardPeragraph px-5'>
            Renie Bins are engineered to extract data out of recyclable waste
            and pass it to our data monetization software
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCards;
