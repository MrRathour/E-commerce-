import React from "react";
import HeroSection from "./components/Herosection";
import { useContextproduct } from "./context/Productcontext";

const About = () => {
  const {myname } = useContextproduct();
  const data = {
    name: "About our Website",
  };

  return (
    <>
      {myname}
      <HeroSection myData={data} />;
    </>
  )
};

export default About;