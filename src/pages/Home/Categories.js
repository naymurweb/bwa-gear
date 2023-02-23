import React from "react";

const Categories = () => {
  const categoriesInfo = [
    {
      total: "100+",
      heading: "Total Tools",
      pra: "Lot of tools that offer free and premium features",
      headingColor: "text-secondary",
    },
    {
      total: "50+",
      heading: "Free Tools",
      pra: "Explore free tools that would help you achieve something",
      headingColor: "text-myGreen",
    },
    {
      total: "40+",
      heading: "Premium Tools",
      pra: "Need more feature? lets try the premium tools",
      headingColor: "text-myRed",
    },
  ];

  return (
    <section className="container mx-auto my-10">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {categoriesInfo.map((data) => (
          <div className="py-5 px-10">
            <h3 className={`text-3xl font-semibold ${data.headingColor}`}>
              {data.total}
            </h3>
            <h4 className="text-2xl font-medium">{data.heading}</h4>
            <p className="my-4 text-lg">{data.pra}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
