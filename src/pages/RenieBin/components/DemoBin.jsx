import DemoImg from "../../../assets/images/bin-1.webp";
import arrowImg from "../../../assets/images/arrow.png";
import renieBgImg from "../../../assets/images/renie-bg.png";

import { Circle } from "./HeroBin";

const DemoBin = () => {
  return (
    <div className="reniebin-demo cmd:mt-[2px] flex flex-col py-16 gap-2.5 items-center relative">
      <header className="flex flex-col items-center">
        <span className="gradient-text leading-[45px] text-[35px] md:text-[45px] font-black">
          Renie Bin
        </span>
        <p className="font-semibold leading-[45px] text-[#E31662] text-[25px] md:text-[35px]">
          280L volume
        </p>
      </header>
      <img className="h-[350px] md:h-[400px]" src={DemoImg} alt="about image" />
      <button className="heroButton text-white">Book a Demo</button>
      <p className=" font-semibold leading-[27px] text-[#646464] text-[18px]">
        Good to collect 200-300 plastic bottles
      </p>

      <span className=" font-semibold leading-[15px] text-[#E31662] text-[15px]">
        Contact us &gt;
      </span>
      <span className="absolute top-[40%] left-[-75px]">
        <Circle />
      </span>

      <img
        className="absolute h-[100px] top-[-45px] "
        src={arrowImg}
        alt="arrow image"
      />
      <img
        className="absolute w-[500px] h-[550px] top-[8%] z-[-1]"
        src={renieBgImg}
        alt="renieBg image"
      />
    </div>
  );
};

export default DemoBin;
