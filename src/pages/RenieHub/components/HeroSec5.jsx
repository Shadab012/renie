import React from "react";
import trackEarn from "../../../assets/images/track-earning.webp";

const HeroSec5 = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] flex flex-col justify-center items-center px-5 sm:px-6 lg:px-8 py-[120px]">
        <div className="flex flex-col cmd:flex-row justify-center  items-center gap-8 w-full ">
          <div className="w-full flex justify-center  cmd:w-[50%]">
            <img className="" src={trackEarn} alt="trackEarnhub" />
          </div>

          <div className="w-full cmd:w-[50%]">
            <h2 className="text-[35px] leading-[35px]  cmd:text-[45px] cmd:leading-[45px] font-[900] gradient-text text-center cmd:text-left py-2.5">
              Track Earnings
            </h2>
            <p className="  text-[18px] leading-[27px] font-[400] mt-4 mb-8 text-center cmd:text-left">
              View your earnings available for payout. As soon as the plastic
              has reached the recycling point and our technology has completed
              the monetization process, the sum becomes available for payout.
            </p>
            <button className="heroButton text-[#fff] hidden cmd:block">
              Connect with an expert
            </button>
          </div>
        </div>

        <div>
          <div className="my-16 text-center">
            <h2 className="text-[35px] leading-[45px] font-[600] gradient-text">
              Ready for Demo?
            </h2>
            <p className="  text-[18px] leading-[27px] font-[400] text-center mt-4 mb-8">
              We have already installed more than 1000+ bins all over the
              UAE. Many government and corporate entities already believe in our
              mission and joined us. With you onboard we are sure that the
              future of plastic is digital.
            </p>
            <button className="heroButton text-[#fff]">
              Connect with an expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec5;
