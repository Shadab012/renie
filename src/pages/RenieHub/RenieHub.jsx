import HeroHub from "./components/HeroHub";
import HeroSec2 from "./components/HeroSec2";
import TrustedBy from "../../components/TrustedBy";
import HeroSec3 from "./components/HeroSec3";
import HeroSec4 from "./components/HeroSec4";
import HeroSec5 from "./components/HeroSec5";

const RenieHub = () => {
  return (
    <div>
      <HeroHub />
      <div className="reniehub-trustedby-main">
        <TrustedBy />
      </div>

      <HeroSec2 />
      <HeroSec3 />
      <HeroSec4 />
      <HeroSec5 />
    </div>
  );
};

export default RenieHub;
