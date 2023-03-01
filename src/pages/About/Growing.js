import React from "react";
import growing from '../../assets/growing.svg'

const Growing = () => {
  return (
    <section className="container mx-auto px-5 my-20">
      <div className="text-center md:px-[22rem] px-0">
        <h2 className="md:text-4xl text-3xl  text-primaryDark font-semibold">Simple is growing. Grow with us.</h2>
        <p className="text-lg my-6 text-secondaryDark">
          On Gear, moments of frustration are replaced with simple features that
          support your every twist and turn, so you can focus on the work that
          matters.
        </p>
      </div>
      <div className="flex justify-center mt-12">
        <img src={growing} alt="" />
      </div>
    </section>
  );
};

export default Growing;
