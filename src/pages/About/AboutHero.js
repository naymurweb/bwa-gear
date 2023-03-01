import React from "react";
import aboutBg from "../../assets/aboutBg.svg";
const AboutHero = () => {
  return (
    <section
      className="bg-primary bg-no-repeat  md:bg-center bg-bottom bg-cover"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="container mx-auto text-white px-5 md:w-2/4 w-full text-center md:py-40 py-20">
        <h2 className="md:text-5xl text-4xl font-semibold">
          We enable designer & developers to{" "}
          <span className="text-secondary">build amazing things</span>
        </h2>
        <p className="py-6">
          We have transformed product development, making it faster, simpler...
          better! That's why in just three years we now help more developers
          build projects than anyone else.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
