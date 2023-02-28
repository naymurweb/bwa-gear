import React, { useEffect, useState } from "react";
import ButtonSecondary from "../../components/ButtonSecondary";
import ToolCard from "../../components/ToolCard";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data.slice(0,3)));
  }, []);
  return (
    <section className="container mx-auto px-5 my-20 py-12">
      <div className="text-center">
        <h2 className="text-4xl font-semibold my-4 text-primaryDark ">
          Most Popular Tools
        </h2>
        <p className="text-lg text-secondaryDark">
          Most popular tools for designer and developer
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 my-12">
        {tools.map((data,id) => (
          <ToolCard key={id} data={data}></ToolCard>
        ))}
      </div>
      <div className="text-center">
        <ButtonSecondary color={"bg-primaryDark"}>See All</ButtonSecondary>
      </div>
    </section>
  );
};

export default Tools;
