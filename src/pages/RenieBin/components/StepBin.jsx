import TwoColLeftImg from "../../../components/TwoColLeftImg";
import step1 from "../../../assets/images/step-1.webp";
import step2 from "../../../assets/images/step-2.webp";
import step3 from "../../../assets/images/step-3.webp";
const StepBin = () => {
  return (
    <div>
      <TwoColLeftImg bgColor="#4765E61A" url={step1}>
        <div>
          <span className="gradient-text font-black text-[45px] leading-[45px] block cmd:inline text-center">
            Barcode or Photo
          </span>
          <br />

          <span className="gradient-text font-black text-[45px] leading-[45px]">
            enabled opening only
          </span>
          <p className="my-3">
            Renie bins only open for plastic and other Pre-approved materials
          </p>
        </div>
      </TwoColLeftImg>
      <div className="py-[60px] flex justify-center ">
        <div className="max-w-[1440px] w-full lg:w-10/12 flex flex-col-reverse cmd:flex-row justify-center ">
          <div className="w-full cmd:w-[60%] flex justify-center cmd:justify-normal px-5 cmd:px-0 items-center">
            <div>
              <span className="gradient-text font-black text-[45px] leading-[45px] block cmd:inline text-center">
                Web-based application,
              </span>
              <br />

              <span className="gradient-text font-black text-[45px] leading-[45px] block cmd:inline text-center">
                no download needed
              </span>
              <p className="my-3 text-center cmd:text-left">
                Our unique connection feature makes it possible to connect Renie
                bins to any smartphone without the need to download any
                application
              </p>
              <span className=" font-semibold leading-[15px] text-[#E31662] text-[15px] block cmd:inline text-center">
                Learn more &gt;
              </span>
            </div>
          </div>
          <div className="w-full cmd:w-[40%] justify-center cmd:justify-normal flex items-center">
            <img className="aboutImg" src={step2} alt="about image" />
          </div>
        </div>
      </div>

      <TwoColLeftImg bgColor="#4765E61A" url={step3}>
        <div>
          <span className="gradient-text font-black text-[45px] leading-[45px] block cmd:inline text-center">
            No Barcode?
            <br />
            Take a picture of the item!
          </span>
          <br />
          <br />
          <span className="gradient-text font-semibold text-[35px] leading-[35px] block cmd:inline text-center">
            Ultra fast waste verification process
          </span>
          <p className="my-3 text-center cmd:text-left">
            The embedded barcode scanner ensures precise identification and
            categorization of waste items. The scanner reads barcodes on
            disposed items, streamlining the recycling process and enhancing
            data accuracy. It’s not just smart; it’s efficient, aiding in our
            mission to make waste disposal more sustainable and profitable.
          </p>
        </div>
      </TwoColLeftImg>
    </div>
  );
};
export default StepBin;
