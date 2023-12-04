// import React from 'react'
import { useState } from "react";
import { search, gridWhite } from "../../assets";
import data from "../../mock/data";

const Products = () => {
  const [allItems, setAllItems] = useState(data);

  console.log(allItems);

  return (
    <section
      className="w-full text-white px-4 pb-4 sm:px-8 pt-8 sm:pt-16 rounded-2xl bg-opacity-10 bg-gray-200"
      style={{ border: "1px solid gray" }}
    >
      <div className="div-wrapper w-full h-full">
        <div
          className="search-categories-wrapper w-full flex flex-col items-center md:flex-row justify-between  mb-8 sm:mb-8"
        >
          <form className="w-full md:w-1/4 mb-4 sm:mb-8 md:mb-0">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium sr-only text-white"
            >
              Search
            </label>

            <div className="relative">
              <input
                type="search"
                className="flex item-center  w-full py-3 ps-10 text-sm rounded-lg bg-mid4Gray border-gray-600 placeholder-gray-400 text-white"
                placeholder="Search..."
                required
                style={{
                  outline: "none",
                  border: "0px solid dimGray",
                  padding: "0.75rem",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid gray";
                }}
                onBlur={(e) => {
                  e.target.style.border = "none";
                }}
              />

              <button
                type="submit"
                className="flex items-center text-black w-auto font-redHatDisplay absolute end-1 bottom-1 font-medium rounded-md text-lg px-4 py-1 bg-secondary"
              >
                <img className="w-6 h-6" src={search} alt="search icon" />
                Search
              </button>
            </div>
          </form>

          {/* _______________ USE MAP METHOD WHEN FETCHING API TO GET TAGS________ */}
          <div className="categoryTags w-auto flex flex-wrap md:flex-nowrap items-center gap-2 sm:gap-4 text-xs sm:text-base font-redHatDisplay">
            <div className="inline-flex font-redHatDisplay text-gray-300 p-1 sm:px-6 sm:py-2 rounded ring-1 ring-gray-400 " >
              <p> Copywriting </p>
            </div>
            <div className="inline-flex font-redHatDisplay text-gray-300 p-1 sm:px-6 sm:py-2 rounded ring-1 ring-gray-400">
              <p>Social Media</p>
            </div>
            <div className="inline-flex font-redHatDisplay text-gray-300 p-1 sm:px-6 sm:py-2 rounded ring-1 ring-gray-400">
              <p>Free Tools</p>
            </div>
            <div className="inline-flex font-redHatDisplay text-gray-300 p-1 sm:px-6 sm:py-2 rounded ring-1 ring-gray-400">
              <p>Videos</p>
            </div>
            <div className="inline-flex font-redHatDisplay text-gray-300 p-1 sm:px-6 sm:py-2 rounded ring-1 ring-gray-400">
              <p>Developer Tools</p>
            </div>
            <div className="inline-flex font-redHatDisplay text-gray-300 p-1 sm:px-6 sm:py-2 rounded ring-1 ring-gray-400">
              <p>Ecommerce</p>
            </div>
            <div className="inline-flex font-redHatDisplay text-gray-300 p-1 sm:px-6 sm:py-2 rounded ring-1 ring-gray-400">
              <p>Email Assistant</p>
            </div>
            <div className="inline-flex font-redHatDisplay text-gray-300 p-1 sm:px-6 sm:py-2 rounded ring-1 ring-gray-400">
              <p>ChatGPT Plugin </p>
            </div>
          </div>
        </div>

        <div className="product-wrapper w-full items-center  ">
          {allItems.map((items) => {
            const { id, title, tag, packageType, price, img } = items;

            return (
              <div
                key={id}
                className="productItems w-full flex justify-between p-3 text-base bg-mid3Gray rounded-lg mb-4 sm:mb-8"
              >
                <div className="prodItemsDeets flex items-center gap-4 w-auto">
                  <img className="w-6 h-6" src={img} alt="product images" />

                  <div className="title-tag text-center flex flex-col sm:flex-row  sm:gap-8 ">
                    <h1 className="text-base sm:text-2xl font-extrabold">
                      {title}
                    </h1>
                    <p className="inline-flex font-redHatDisplay text-gray-300 items-center justify-center p-1 sm:px-2 sm:py-2 text-xs font-thin rounded bg-midGray shadow-2xl ring-1 ring-mid2Gray">
                      {tag}
                    </p>
                  </div>
                </div>

                <div className="productPricing flex items-center gap-4">
                  <p className="font-redHatDisplay text-xs sm:text-base text-black py-1 px-3 rounded-md bg-white">
                    {packageType}
                  </p>
                  <div className="flex flex-col sm:flex-row">
                    <p className="font-panchang font-extrabold text-sm sm:text-xl">
                      {price}/
                    </p>
                    <span className="font-redHatDisplay bottom-0 text-sm sm:text-xl">
                      Month
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center font-redHatDisplay text-sm md:text-sm">
          <a
            href="#"
            className="flex rounded-lg border border-darkGray items-center bg-mid3Gray px-8 py-3"
            style={{ border: "1px solid" }}
          >
            <img src={gridWhite} className="w-4 h-4 mr-1" alt="grid discover" />{" "}
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
