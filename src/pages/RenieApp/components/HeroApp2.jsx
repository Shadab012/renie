import React from "react";

const HeroApp2 = () => {
  return (
    <div>
      <div className="w-full text-center">
        <div
          className="min-h-[256px] flex justify-center items-center"
          style={{
            background:
              "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
          }}
        >
          <h2 className="text-[18px] leading-[27px] font-[400] text-white ">
            Renie App, encourages your employees and visitors to recycle plastic
            effortlessly. No downloads, just instant access through their
            browser. Each recycled bottle becomes a ticket to win exciting
            prizes, making sustainability rewarding. Boost your environmental
            impact and engage your community in a fun, meaningful way.
          </h2>
        </div>
        <p className="text-[45px] leading-[45px] font-[900] gradient-text my-10 ">
          Connect to the Renie Bin & Drop{" "}
        </p>

        <div className=" h-[30vh] text-center bg-gray-500">watch video</div>
      </div>
    </div>
  );
};

export default HeroApp2;
