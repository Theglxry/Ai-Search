import { chatGPTImg, evolutionImg, arrowCircleRight } from "../../assets";
import {useEffect } from "react";
import AOS from "aos";



const Featured = () => {

  useEffect(() => {
    // Refresh AOS whenever your component mounts/updates
    AOS.init();
  }, []);

  return (
    <section className="featured-wrapper flex flex-col gap-4 w-full h-auto md:w-1/3 md:ml-10 md:mr-4">
      <div>
        <p className="text-gray-400 text-lg sm:text-xl"> Featured Articles</p>
      </div>

      {/* FEAURED ONE  */}
      <div className="featured w-full flex flex-col justify-center items-center gap-8 md:h-[400px]">
        <div className="featured-child1 relative w-full flex justify-center items-center overflow-hidden rounded-xl "
         data-aos="fade-right"
        data-aos-duration="2000" 

        >
          <img src={chatGPTImg} className="w-full object-cover " />

          <div className="text-content absolute w-full p-4 bottom-0 bg-midGray rounded-b-xl">
            <p className="text-secondary">03 Aug. 2023</p>
            <h2 className="text-white">
              Unraveling the AI Landscape: A Beginners Guide
            </h2>

            <div className="sm:flex font-redHatDisplay text-sm md:text-base font-bold float-right">
              <a
                href="#"
                className="flex rounded-lg text-gray-400 text-sm items-center"
                style={{ gap: "4px" }}
              >
                <p style={{ marginRight: "0px" }}> Read more </p>
                <img
                  src={arrowCircleRight}
                  className="w-5 h-5"
                  alt="grid discover"
                />{" "}
              </a>
            </div>
          </div>
        </div>

        {/* FEAURED TWO */}
        <div className="featured-child2 relative w-full flex justify-center items-center overflow-hidden rounded-xl"
         data-aos="fade-right"
        data-aos-duration="1000" 

        >
          <img src={evolutionImg} className="w-full object-cover" />

          <div className="text-content absolute w-full p-4 bottom-0 bg-midGray rounded-b-xl">
            <p className="text-secondary">04 Aug. 2023</p>
            <h2 className="text-white">
              The Evolution of AI: Trends Shaping the Future
            </h2>

            <div className="sm:flex font-redHatDisplay text-sm md:text-base font-bold float-right">
              <a
                href="#"
                className="flex rounded-lg text-gray-400 text-sm items-center"
                style={{ gap: "4px" }}
              >
                <p style={{ marginRight: "0px" }}> Read more </p>
                <img
                  src={arrowCircleRight}
                  className="w-5 h-5"
                  alt="grid discover"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
