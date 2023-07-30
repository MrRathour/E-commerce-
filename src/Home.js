import React from "react";
import HeroSection from "./components/Herosection";
import Services from "./components/Services";
import Trusted from "./components/tursetde";
import Featureproducts from "./components/featureproducts";
const Home = () => {
  const data = {
    name: "Vishal store",
  };
  return (
    <>
        <HeroSection myData={data} />
        <Featureproducts/>
        <Services/>
        <Trusted/>
    </>
  )
};

export default Home;