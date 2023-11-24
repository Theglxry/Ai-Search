import { chatGPTImg, evolutionImg, arrowCircleRight } from "../../assets";

const Featured = () => {
  const backgroundImageStyle1 = {
    backgroundImage: `url(${chatGPTImg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  };

  const backgroundImageStyle2 = {
    backgroundImage: `url(${evolutionImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

  };

  return (
    // <section className="flex flex-col gap-4 w-full md:w-1/3 h-[50vh] md:h-full relative border-2 border-red-700">
    <section className="flex flex-col gap-4 w-full md:w-1/3  h-[50vh] md:h-full relative border-2 border-red-700" style={{border: '2px solid red'}}>


      <div>
        <p className="text-gray-400 text-lg"> Featured Articles</p>
      </div>

 

      <div className=" w-full h-screen md:h-full rounded-2xl relative bg-center bg-no-repeat bg-cover object-cover" 
      
      style={{ ...backgroundImageStyle1 }}
      >

       

        <div className="absolute w-full h-1/2 p-4 top-[50%] bg-midGray rounded-b-xl">
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





      <div
        className="w-full h-screen md:h-full rounded-2xl relative"


        style={{ ...backgroundImageStyle2 }}
      >
        <div className="absolute w-full h-1/2  top-[50%] bg-midGray rounded-b-xl">
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



    </section>
  );
};

export default Featured;
