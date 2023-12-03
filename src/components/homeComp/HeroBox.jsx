import { group, gridBlack } from "../../assets/index";

const HeroBox = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${group})`,
    backgroundSize: "70%",  
    backgroundPosition: "bottom",  
    backgroundRepeat: "no-repeat",  
  };

  return (
    <section
      // className="w-full md:w-1/2 h-auto ss:h-[150vh] ss:border-2 md:h-auto rounded-2xl bg-skyBlue"
      className="w-full md:w-1/2 h-auto ss:border-2 md:h-auto rounded-2xl bg-skyBlue"

      style={backgroundImageStyle}
    >
      <div className="hero-content flex flex-col gap-6 p-6  md: ss:p-8  md:p-16 mb-16">
        <div className="hb-h1 text-darkGray text-4xl  ss:text-3xl md:5xl  ">

          <h1>Discover, Compare, Excel with AI.</h1>
        </div>

        <div className="font-redHatDisplay text-sm ss:text-2xl  leading-6">
          <p>
            we are dedicated to simplifying your exploration of AI technologies,
            making informed decisions effortless, and propelling your journey
            into the future.
          </p>
        </div>

        <div className="flex  font-redHatDisplay text-sm md:text-base font-bold">
          <a
            href="#"
            className="flex rounded-lg border border-darkGray items-center bg-white px-9 py-3"
          >
            <img src={gridBlack} className="w-6 h-6" alt="grid discover" />
            Discover
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default HeroBox;
