// import React from 'react'
import {
  gridPurple,
  bookmark,
  collectionIcon,
  plusCircle,
  menu,
  close,
} from "../../assets";
import { navLinks } from "../../constants/constants";
import { useState } from "react";

const navBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="w-full flex py-8 justify-between items-center"
      >
        <div className="text-white font-panchang text-4xl font-bold">
          A.ISearch
        </div>



        <div className="sm:block hidden">
          <ul className="list-none flex justify-center items-center sm:text-xl gap-8 flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`sm:flex sm:items-center cursor-pointer 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}

             text-white`}
              >
                <img className="" src={nav.img} />
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
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

        {/* __________________________________________________mobile menu___________________________-______  */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? "flex" : "hidden"}
           p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 
           min-w[140px] rounded-xl sidebar flex-col items-center
           
           text-white bg-midGray
           `}
            style={{ border: "1px solid gray" }}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`flex items-center font-poppins 
                font-nomal cursor-pointer 
                text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
                >
                  <img className="w-6 h-6" src={nav.img} />

                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            {/* purple button */}
            <div className="sm:flex font-redHatDisplay text-sm md:text-base font-bold">
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
          </div>
        </div>
      </nav>






    </>
  );
};

export default navBar;
