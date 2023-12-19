// import React from 'react'
import {
  NavBar,
  HeroBox,
  Featured,
  Spotlight,
  Product,
  Footer
} from "../../components/homeComp/index";
import styles from "../../styles/style";
// import 
// import { useEffect } from "react";



const HomePage = () => {


  return (
  
    <main className="w-full px-8 pb-8 h-full relative overflow-auto">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mb-24`}>
          <NavBar  />
        </div>
      </div>



      <section className={`w-full max-h-full flex-col gap-16 sm:gap-[10rem] ${styles.flexCenter}`} >
        <section className="top-section w-full h-auto flex flex-col gap-16 md:gap-0 md:flex-row" >
          <HeroBox />
          <Featured  />
          <Spotlight />
        </section>


        <section className="w-full h-full">
          <Product />
        </section>
      </section>

      <footer className="absolute w-full  left-0">
      <Footer />

      </footer>
    </main>
  );
};

export default HomePage;
