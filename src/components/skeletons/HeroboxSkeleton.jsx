// import React from 'react'
// import Skeleton from "./Skeleton";
// import './skeleton.css';

// const SkeletonHero = () => {
//   return (
//     <div className=" w-full md:w-1/2 h-auto flex flex-col items-center justify-center ss:border-2 md:h-auto rounded-2xl ">
//     <Skeleton classes="title width-50" />
//       <Skeleton classes="text width-100" />
//       <Skeleton classes="text width-100" />
//       {/* <Skeleton classes="text width-100" /> */}
//     </div>
//   );
// };

// export default SkeletonHero;

import { imgPlaceholderDark } from "../../assets";


const HeroboxSkeleton = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imgPlaceholderDark})`,
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };



  return (
    <div className="skeleton rounded-2xl border shadow-2xl w-full h-full  bg-gray-700 px-4 md:pt-24 md:px-16"
      style={backgroundImageStyle}
    
    >
      <div className="animate-pulse w-full h-[20rem] flex flex-col justify-center gap-10 md:gap-20 bg-gray-700 opacity-50"
      // style={{border:'2px solid red'}}
      >
        <div className="w-full flex flex-col gap-4 md:gap-8">
          <div className="rounded-xl w-full h-[30px] bg-gray-700"></div>
          <div className=" rounded-xl w-full h-[80px] bg-gray-700"></div>
        </div>

        <div className=" rounded-xl w-[30%] h-[40px] bg-gray-700"></div>
      </div>
    </div>
  );
};

export default HeroboxSkeleton;
