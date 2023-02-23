import React from "react";
import hero from "../../assets/hero.svg";
import ButtonPrimary from "../../components/ButtonPrimary";
import user1 from "../../assets/person/user.svg";
import user2 from "../../assets/person/user2.svg";

const Hero = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto flex justify-between items-center flex-col-reverse md:flex-row px-5">
        <div className="md:w-1/2 w-full md:text-left text-center mt-12 md:mt-0">
          <h1 className="text-myWhite md:text-5xl text-3xl font-semibold">
            Tools for Designer,
            <br /> Developer, and Business Owner
          </h1>
          <p className="text-myWhite text-lg my-5">
            Information about the latest and most popular design and developer
            tools around the world.
          </p>
          <ButtonPrimary>Explore now</ButtonPrimary>
          <div className="my-12 flex items-center md:justify-start justify-center">
            <div className="w-10 flex ">
              <img src={user1} alt="" />
              <img src={user2} alt="" className="-mx-6" />
            </div>

            <small className="text-myWhite text-base mx-6">
              <span className="text-secondary">4,000</span>+ User using the
              tools
            </small>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex md:justify-end justify-center">
          <img src={hero} alt="" className=" md:w-3/4 w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
