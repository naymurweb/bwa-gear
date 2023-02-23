import React from "react";
import Brands from "./Brands";
import Categories from "./Categories";
import Hero from "./Hero";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Tools></Tools>
      <Brands></Brands>
    </div>
  );
};

export default Home;
