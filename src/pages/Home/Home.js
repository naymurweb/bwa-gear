import React from "react";
import Brands from "./Brands";
import Categories from "./Categories";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Tools></Tools>
      <Brands></Brands>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
