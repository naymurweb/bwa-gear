import React from "react";
import dashboard from "../../assets/Dashboard.svg";
import ButtonPrimary from "../../components/ButtonPrimary";
const HeroArea = () => {
  return (
    <section
      className="bg-primary bg-no-repeat  md:bg-center bg-bottom bg-contain"
      style={{ backgroundImage: `url(${dashboard})` }}
    >
      <div className="text-center text-white container mx-auto px-5 md:py-40 py-20 relative top-0">
        <h2 className="text-4xl font-semibold my-4">Most Popular Tools</h2>
        <p className="text-lg mb-8">
          Most popular tools for designer and developer
        </p>
        <ButtonPrimary>Explore now</ButtonPrimary>
      </div>
    </section>
  );
};

export default HeroArea;
