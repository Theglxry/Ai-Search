import { chatGPTImg, evolutionImg, arrowCircleRight } from "../../assets";

const Featured = () => {
  return (
    <section
      className="featured-wrapper flex flex-col gap-4 w-full h-full md:w-1/3 relative"
      style={{ border: "2px solid red" }}
    >
      <div>
        <p className="text-gray-400 text-lg"> Featured Articles</p>
      </div>

      <div className="featured w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="featured-child1 relative w-full h-full flex justify-center items-center overflow-hidden rounded-xl">
          <img src={chatGPTImg} className="w-full max-h-full object-cover " />

          <div className="text-content absolute w-full h-[40%] p-4 top-[60%] bg-midGray rounded-b-xl">
            <p className="text-secondary">03 Aug. 2023</p>
            <h2 className="text-white">
              Unraveling the AI Landscape: A Beginner's Guide
            </h2>

            <div className="sm:flex hidden font-redHatDisplay text-sm md:text-base font-bold float-right">
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

        <div className="featured-child2 relative w-full h-full flex justify-center items-center overflow-hidden rounded-lg">
          <img src={evolutionImg} className="w-full max-h-full object-cover" />

          <div className="text-content absolute w-full h-[40%] p-4 top-[60%] bg-midGray rounded-b-lg">
            <div className="absolute w-full h-1/2 p-4 top-0 bg-midGray rounded-b-xl">
              <p className="text-secondary">03 Aug. 2023</p>
              <h2 className="text-white">
                Unraveling the AI Landscape: A Beginner's Guide
              </h2>
              <div className="sm:flex hidden font-redHatDisplay text-sm md:text-base font-bold float-right">
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
      </div>
    </section>
  );2
};

export default Featured;
