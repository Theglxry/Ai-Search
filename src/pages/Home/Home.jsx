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
    <main className="scrollable-content w-full px-8 h-screen relative overflow-auto">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mb-24`}>
          <NavBar />
        </div>
      </div>

      <div className={`h-screen flex-col gap-16 ${styles.flexCenter} ${styles.boxWidth}`} >
        <div className={`top-section h-screen flex flex-col gap-16 sm:gap-4 md:flex-row  ${styles.boxWidth}`} >
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
