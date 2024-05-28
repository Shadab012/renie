// import React from 'react';
// import binImg from '../../../assets/images/bin-1.png';
// import cardIcons from '../../../assets/images/cardIcons.png';
// import incomeIcon from '../../../assets/images/incomeCardIcon.png';
// function ServiceCards() {
//   return (
//     <div className='text-black font-bolder w-10/12 border border-black mx-auto my-10'>
//       <div className='serviceTitle flex justify-center'>
//         <span className='serviceTitleText font-semibold gradient-text'>
//           How it works
//         </span>
//       </div>
//       <div className='cardsSection flex justify-center gap-5 my-5'>
//         <div className='cardItem  flex flex-col justify-center items-center gap-5 p-5'>
//           <span className='cardTitle font-semibold gradient-text'>
//             Data extraction
//           </span>
//           <img className='extractionCardImg' src={binImg} alt='' />
//           <p className='cardPeragraph px-5'>
//             Renie Bins are engineered to extract data out of recyclable waste
//             and pass it to our data monetization software
//           </p>
//         </div>

//         <div className='cardItem  flex flex-col justify-center items-center gap-5 p-5'>
//           <span className='cardTitle font-semibold gradient-text'>
//             Data monetization
//           </span>
//           <div className='cardIconsSection'>
//             <img className='iconImg' src={cardIcons} alt='' />
//           </div>
//           <p className='cardPeragraph px-5'>
//             The data coming from Renie Bins is received by multiple Renie
//             software solutions and monetized automatically
//           </p>
//         </div>

//         <div className='cardItem  flex flex-col justify-center items-center gap-10 p-5'>
//           <span className='cardTitle font-semibold gradient-text'>income</span>
//           <img className='incomeCardImg my-10' src={incomeIcon} alt='' />
//           <p className='cardPeragraph px-5'>
//             Renie Bins are engineered to extract data out of recyclable waste
//             and pass it to our data monetization software
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceCards;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../assets/css/style.css'; // Your custom styles
import binImg from '../../../assets/images/bin-1.png';
import cardIcons from '../../../assets/images/cardIcons.png';
import incomeIcon from '../../../assets/images/incomeCardIcon.png';

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
      <div className='serviceTitle flex justify-center'>
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
            <img className='iconImg' src={cardIcons} alt='Data monetization' />
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
                className='iconImg'
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
    </div>
  );
}

export default CardSection;
