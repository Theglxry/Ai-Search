// import React from 'react'
import {
  NavBar,
  HeroBox,
  Featured,
  Spotlight,
  Product,
} from "../../components/homeComp/index";
import styles from "../../styles/style";

const HomePage = () => {
  return (
    <main className="scrollable-content w-screen px-8 h-screen relative overflow-auto border-2 border-red-500">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mb-24`}>
          <NavBar />
        </div>
      </div>

      <div className={`h-screen flex-col gap-16 border-2 border-red-500 ${styles.flexCenter} ${styles.boxWidth}`} >
        <div className="top-section w-full h-screen flex flex-col gap-16 sm:gap-4 md:flex-row" >
          <HeroBox />
          <Featured />
          <Spotlight />
        </div>

        <div className="w-full h-screen">
          <Product />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
