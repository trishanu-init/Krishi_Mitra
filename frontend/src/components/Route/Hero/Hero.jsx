import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <hero className="hidden md:block">
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(backgrnd.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Get Fresh, Local Produce <br /> Straight from Farmers
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#020101ba]">
        Empower Your Harvest: Sell Fresh, Buy Smart. <br /> Get the Best Tools and Fertilizers, Plus Plant Disease Detection.<br />
        Revolutionize Your Farm with the Platform Built for Farmers
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 mb-4 mr-4`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
        <Link to="/predict" className="inline-block">
            <div className={`${styles.button_d} mt-5 mb-4`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Disease Analysis
                 </span>
            </div>
        </Link>
      </div>
    </div>
    </hero>
  );
};

export default Hero;
