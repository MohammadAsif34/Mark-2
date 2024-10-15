import React from "react";
import hero1 from "/hero1.jpg";
const Hero = () => {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <img src={hero1} alt="" className="w-full h-full" />
    </div>
  );
};

export default Hero;
