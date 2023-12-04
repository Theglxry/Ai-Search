// import React from 'react'
import {
  gridPurple,
  bookmark,
  collectionIcon,
  plusCircle,
  menu,
} from "../../assets";
// import { useState } from "react"

const navBar = () => {
  // const [hideNav, setHideNav] = useState (false);

  return (
    <nav className="flex justify-between w-full pt-8">
      <div className="text-white font-panchang text-4xl font-bold">
        A.ISearch
      </div>

      <div>
        <ul className="sm:flex flex-row gap-8 text-white hidden ">
          <li
            className="flex rounded-lg border border-darkGray items-center   px-3 py-3" 
            style={{ gap: "4px" }}  
          >
            <img src={gridPurple} />
            Discover
          </li>
          <li
            className="flex rounded-lg border border-darkGray items-center   px-3 py-3" 
            style={{ gap: "4px" }}  
          >
            <img src={bookmark} />
            Favorite
          </li>
          <li
            className="flex rounded-lg border border-darkGray items-center   px-3 py-3" 
            style={{ gap: "4px" }}  
          >
            <img src={collectionIcon} />
            Blog
          </li>
        </ul>
      </div>

      <div className="sm:flex hidden font-redHatDisplay text-sm md:text-base font-bold">
        <a
          href="#"
          className="flex rounded-lg border border-darkGray items-center bg-tertiary px-3 py-3" 
          style={{ gap: "4px" }}  
        >
          <img
            src={plusCircle}
            className="w-6 h-6"
            alt="grid discover"
            style={{ marginRight: "8px" }}
          />{" "}
          {/* Added margin-right */}
          Submit Tool
        </a>
      </div>
    </nav>
  );
};

export default navBar;
