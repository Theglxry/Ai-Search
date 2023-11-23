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
  // return <div className="text-secondary text-6xl font-santoshi">Home</div>;
  return (
    <main className="bg-darkGray w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

    

      <div className={`h-full flex-col ${styles.flexCenter} ${styles.boxWidth}`}>
      <div className={`h-1/2 border-red-500 border-2  ${styles.flexCenter} ${styles.boxWidth}`}>
      <HeroBox />
       <Featured />
       <Spotlight />
      </div>
    


       <div className="w-full h-1/2 border-yellow-500 border-2">
        <Product />
       </div>
      </div>

    </main>
  );
};

export default HomePage;
