// import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className="skeleton rounded-2xl border shadow-2xl w-full h-full  bg-gray-600 px-4 md:pt-24 md:px-16">
    <div className="animate-pulse w-full h-[20rem] flex flex-col justify-center gap-10 md:gap-20">
      <div className="w-full flex flex-col gap-4 md:gap-8">
        <div className="rounded-xl w-full h-[30px] bg-gray-500"></div>
        <div className=" rounded-xl w-full h-[80px] bg-gray-500"></div>
      </div>

      <div className=" rounded-xl w-[30%] h-[40px] bg-gray-500"></div>
    </div>
  </div>
  )
}

export default ProductSkeleton;