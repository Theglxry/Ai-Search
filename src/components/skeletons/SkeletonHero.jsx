// import React from 'react'
import Skeleton from "./Skeleton";

const SkeletonHero = () => {
  return (
    <div className="w-full md:w-1/2 h-auto flex items-center justify-center ss:border-2 md:h-auto rounded-2xl bg-skyBlue ">
      <Skeleton classes="title width-50" />
      <Skeleton classes="text width-100" />
      <Skeleton classes="text width-100" />
      <Skeleton classes="text width-100" />
    </div>
  );
};

export default SkeletonHero;
