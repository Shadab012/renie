import React, { useRef } from "react";
import "../../assets/css/home.css";
import Arrow from "../../assets/images/arrow.png";
import TrustedBy from "../../components/TrustedBy";
import About from "./components/About";
import AdsMatter from "./components/AdsMatter";
import HeroSection from "./components/HeroSection";
import ReniebinSection from "./components/ReniebinSection";

import RenieRewardSection from "./components/RenieRewardSection";
import ServiceCards from "./components/ServiceCards";
import SubscribCards from "./components/SubscribCards";
import TellStory from "./components/TellStory";
import Hub from "../../components/Hub";

function Home() {
  const serviceCardRef = useRef(null);

  const scrollToServiceCard = () => {
    if (serviceCardRef.current) {
      serviceCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <HeroSection scrollToServiceCard={scrollToServiceCard} />
      <div className="trustedBySection my-5">
        <TrustedBy />
      </div>
      <div className="aboutSection my-10 pt-10">
        <About />
      </div>
      <div className="serviceCardsSection " ref={serviceCardRef}>
        <ServiceCards />
      </div>
      <div className="renieBinSection z-[-1] relative mb-10 py-10 ">
        <ReniebinSection />
      </div>
      <div className="renieRewardSection flex justify-center items-center mt-10">
        <RenieRewardSection />
      </div>
      <div className="renieHubSection flex justify-center items-center ">
        <Hub
          top="title"
          title="Renie Hub"
          subTitle="One Network to Integrate Them All"
          desc="Renie hub provides real-time data for smarter logistic decisions and an
overview of data driven income."
        />
      </div>
      <div className="adsMatterSection flex justify-center items-center">
        <AdsMatter />
      </div>
      <div className="tellStorySection flex justify-center items-center">
        <TellStory />
      </div>
      <div className="subcribCardsSection mt-10 md:mb-10">
        <SubscribCards />
      </div>
    </div>
  );
}

export default Home;
