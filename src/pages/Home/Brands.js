import React from "react";
import google from "../../assets/brands/google.svg";
import airbnb from "../../assets/brands/airbnb.svg";
import netflix from "../../assets/brands/netflix.svg";

const Brands = () => {
  const brandsDoc = [
    {
      logo: google,
      details:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking",
    },
    {
      logo: netflix,
      details:
        "Streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices",
    },
    {
      logo: airbnb,
      details:
        "American vacation rental online marketplace company based in San Francisco, California. Airbnb maintains and hosts a marketplace",
    },
  ];
  return (
    <section className="container mx-auto px-5 my-12 py-12">
      <div className="text-center">
        <h2 className="text-4xl font-semibold my-4 text-primaryDark">
          Trusted by Brands
        </h2>
        <p className="text-lg">Brand that using the tools</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 my-12">
        {brandsDoc.map((data, id) => (
          <div key={id} className="">
            <div className="flex justify-center my-5">
              <img src={data.logo} alt="" />
            </div>
            <p className="text-center">{data.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
