// import React from 'react'

import { imgPlaceholderDark } from "../../assets";

const FeaturedSkeleton = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imgPlaceholderDark})`,
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="skeleton rounded-2xl border shadow-2xl w-full h-full  bg-gray-600">
      <div className="animate-pulse w-full h-full flex flex-col justify-center">
        {/* <div className="w-full flex flex-col gap-4 md:gap-8">
          <div className="rounded-xl w-full h-[30px] bg-gray-500"></div>
          <div className=" rounded-xl w-full h-[80px] bg-gray-500"></div>
        </div>

        <div className=" rounded-xl w-[30%] h-[40px] bg-gray-500"></div> */}

        <div className="w-full h-full relative" style={backgroundImageStyle}>
          <div
            className="absolute w-full h-[50px] bottom-0 bg-gray-600 z-50 "
          >

          </div>
        </div>


        <div className="w-full h-full relative" style={backgroundImageStyle}>
          <div
            className="absolute w-full h-[50px] bottom-0 bg-gray-600 z-50 "
          >

          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FeaturedSkeleton;
