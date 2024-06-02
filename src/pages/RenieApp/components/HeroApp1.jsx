import React from "react";
import AdMap from "../../../assets/images/ad-map.webp";
import Round1 from "../../../assets/images/round-1.png";
import bgLeaf from "../../../assets/images/bg-leaf.webp";

const HeroApp1 = () => {
  return (
    <div className="max-w-[1440px] min-h-[70vh] flex justify-center items-center">
      <div className="w-[660px]">
        <span>Ready to</span>
        <h2 className="text-[45px] leading-[35px] font-[900] gradient-text">
          Recycle
        </h2>
        <span className="gradient-text">
          collect points & earn <br /> guaranteed
        </span>
        <h2 className="text-[45px] leading-[35px] font-[900] gradient-text">
          Rewards?
        </h2>
      </div>
      <div>
        <img className="w-[113px]" src={bgLeaf} alt="AdMap" />
        <div>
          <img
            className="w-[213px] relative z-0 top-0 le"
            src={AdMap}
            alt="AdMap"
          />
          <img
            className="w-[113px] relative z-0 top-0 le"
            src={Round1}
            alt="AdMap"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroApp1;
