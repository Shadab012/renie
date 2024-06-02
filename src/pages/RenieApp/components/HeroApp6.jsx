import React from "react";
import adsMob from "../../../assets/images/adsMob.png";

const HeroApp6 = () => {
  return (
    <div>
      <div
        className="min-h-[256px] flex justify-around items-center text-white"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <div className="w-[660px]">
          <h2 className="text-[45px] leading-[45px] font-[900] text-white mb-4">
            Ads that matter
          </h2>
          <h3 className="text-[35px] leading-[40px] font-[600] text-white mb-4">
            The connection interface changes according to the user’s
            preferences.
          </h3>
          <span className="text-[18px] leading-[27px] font-[300]">
            Our AI powered advertisement platform provides you with the complete
            interface that displays relevant ads based on the preference of the
            app user.
          </span>{" "}
          <br />
          <button className="heroButton ">Learn more</button>
        </div>

        <div>
          <img
            className="w-[213px] relative z-0 top-0 le"
            src={adsMob}
            alt="AdMap"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroApp6;
