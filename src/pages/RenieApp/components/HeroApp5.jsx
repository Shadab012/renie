import React from "react";
import impact from "../../../assets/images/impact.webp";

const HeroApp5 = () => {
  return (
    <div className="max-w-[1440px] min-h-[70vh] flex justify-center items-center gap-4">
      <div>
        <img className="w-[313px]" src={impact} alt="image hub" />
      </div>

      <div className="w-[660px]">
        <h2 className="text-[45px] leading-[45px] font-[900] gradient-text">
          Follow the Impact
        </h2>

        <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8">
          Every waste bottle that is collected through Renie bins is recycled
          with full traceability. This makes a huge impact on the
          environment. Renie app registers everything and shows it to our
          individual users.
        </p>

        <button className="heroButton ">Take me to the Renie App</button>
      </div>
    </div>
  );
};

export default HeroApp5;
