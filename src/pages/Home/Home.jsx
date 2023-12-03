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
    <main className="w-full px-8 h-full relative overflow-auto">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mb-24`}>
          <NavBar />
        </div>
      </div>



      <div className={`w-full h-auto flex-col gap-16 ${styles.flexCenter}`} >
        <div className="top-section w-full h-auto flex flex-col gap-16 md:gap-16 sm:gap-4 sm:flex-row" >
          <HeroBox />
          <Featured />
          <Spotlight />
        </div>


        <div className="w-full h-full">
          <Product />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
