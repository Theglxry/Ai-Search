import { chatGPTImg, evolutionImg } from "../../assets";

const Featured = () => {
  const backgroundImageStyle1 = {
    backgroundImage: `url(${chatGPTImg})`,
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };

  const backgroundImageStyle2 = {
    backgroundImage: `url(${evolutionImg})`,
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="flex flex-col gap-4 w-full md:w-1/3 h-full relative ">
      <div>
        <p className="text-gray-400 text-lg"> Featured Articles</p>
      </div>
      <div
        className="w-full h-full rounded-2xl relative"
        style={backgroundImageStyle1}
      >
        <div className="absolute w-full h-1/2  top-[50%] bg-midGray rounded-b-xl"></div>
      </div>

      <div
        className="w-full h-full rounded-2xl relative"
        style={backgroundImageStyle2}
      >
        <div className="absolute w-full h-1/2  top-[50%] bg-midGray rounded-b-xl"></div>

      </div>
    </section>
  );
};

export default Featured;
