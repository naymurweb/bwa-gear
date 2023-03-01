import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import hero from "../../assets/newcomerhero.svg";

const ComerHero = () => {
  return (
    <section
      className="bg-primary bg-no-repeat  md:bg-center bg-bottom bg-contain"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="text-center text-white container mx-auto px-5 md:py-40 py-20">
        <h2 className="text-4xl font-semibold my-4">New Comer Tools</h2>
        <p className="text-lg mb-8">
        New tools gains popularity
        </p>
        <ButtonPrimary>Explore now</ButtonPrimary>
      </div>
    </section>
  );
};

export default ComerHero;
