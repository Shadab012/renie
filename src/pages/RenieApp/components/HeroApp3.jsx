import React from "react";
import AdMap from "../../../assets/images/ad-map.webp";

const HeroApp3 = () => {
  return (
    <div className="max-w-[1440px] min-h-[70vh] flex justify-center items-center">
      <div className="w-[660px]">
        <h2 className="text-[45px] leading-[35px] font-[900] gradient-text">
          No vouchers, no discounts
        </h2>
        <h2 className="text-[45px] leading-[35px] font-[900] gradient-text mt-4">
          just valuable prizes
        </h2>
        <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8">
          We go beyond the usual discounts or vouchers for recycling. We believe
          that these efforts deserve more. That’s why we offer the chance to win
          truly valuable prizes, like the latest smartphone or a dream vacation,
          all without hidden costs.
        </p>
      </div>
      <div>
        <img
          className="w-[213px] relative z-0 top-0 le"
          src={AdMap}
          alt="AdMap"
        />
      </div>
    </div>
  );
};

export default HeroApp3;
