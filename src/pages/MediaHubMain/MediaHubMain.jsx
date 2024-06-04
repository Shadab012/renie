import React, { useState } from "react";
import HeroMdMain from "./components/HeroMdMain";
import HeroMain1 from "./components/HeroMain1";
import HeroFirst from "./components/HeroFirst";
import MediaHubDynamic from "./components/MediaHubDynamic";

const MediaHubMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <HeroFirst />
      <HeroMdMain />
      {!isOpen ? (
        <HeroMain1 isOpen={isOpen} handleClick={(item) => setIsOpen(item)} />
      ) : (
        <MediaHubDynamic />
      )}

      {/*  */}
    </div>
  );
};

export default MediaHubMain;
