import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://drive.google.com/drive-viewer/AKGpihZRWV3VNENAIzLeh3H0QGQkYjzsGfF9ZzDllo0ktDQ4UeUZZbPRo6WSfpfOoZRj7LXHLYtoE2s4iK8ul6cGSiKtSPRn6LLRAg=s1600-rw-v1",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Get Fresh, Local Produce <br /> Straight from Farmers
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Empower Your Harvest: Sell Fresh, Buy Smart. <br /> Get the Best Tools and Fertilizers, Plus Plant Disease Detection.<br />
        Revolutionize Your Farm with the Platform Built for Farmers
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
