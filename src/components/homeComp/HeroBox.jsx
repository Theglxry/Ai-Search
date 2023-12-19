import { group, gridBlack } from "../../assets/index";
// import { useEffect, useState } from "react";
// import AOS from "aos";
import HeroboxSkeleton from "../skeletons/HeroboxSkeleton";
import { useLoaderLogic } from "../../hooks/useAppLogic";


const HeroBox = () => {
  const { isLoading } = useLoaderLogic();

  // const [loading, setLoading] = useState(true);



  // useEffect(() => {
    //_____________-simulating a delay to mimic data fetching
    // const timeout = setTimeout(() => {
      // setLoading(false);
      // AOS.init();
    // }, 2000);


    //_______ Refresh AOS whenever your component mounts/updates
    //________ AOS.init();
    // return () => clearTimeout(timeout);
  // }, []);




  const backgroundImageStyle = {
    backgroundImage: `url(${group})`,
    backgroundSize: "70%",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="w-full md:w-1/2 h-auto flex items-center justify-center ss:border-2 md:h-auto rounded-2xl bg-skyBlue "
      style={backgroundImageStyle}
    >
      {isLoading ? (
        <HeroboxSkeleton />
      ) : (
        <div
          className="hero-content flex flex-col  gap-6 p-6 sm:w-[45rem] md: ss:p-8  md:p-16 mb-16"
          // data-aos="fade-right"
        >
          <div className="hb-h1 text-darkGray text-4xl  ss:text-3xl md:6xl  ">
            <h1>Discover, Compare, Excel with AI.</h1>
          </div>

          <div className="font-redHatDisplay text-sm ss:text-2xl md:text-3xl leading-6">
            <p>
              we are dedicated to simplifying your exploration of AI
              technologies, making informed decisions effortless, and propelling
              your journey into the future.
            </p>
          </div>

          <div className="flex  font-redHatDisplay text-sm md:text-base md:mt-8 font-bold">
            <a
              href="#"
              className="flex rounded-lg border border-darkGray items-center bg-white px-9 py-3"
            >
              <img src={gridBlack} className="w-6 h-6" alt="grid discover" />
              Discover
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBox;
