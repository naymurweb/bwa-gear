import React, { useEffect, useState } from "react";
import ButtonSecondary from "../../components/ButtonSecondary";
import ToolCard2 from "../../components/ToolCard2";

const NewTools = () => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/newtools")
      .then((res) => res.json())
      .then((data) => setTool(data.slice(0, 4)));
  }, []);
  return (
    <section className="  my-20 bg-myBg3 py-12">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <h2 className="text-4xl font-semibold my-4 text-primaryDark">
            New Comer Tools
          </h2>
          <p className="text-lg">New tools gains popularity</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 my-12">
          {tool.map((data, id) => (
            <ToolCard2 key={id} data={data}></ToolCard2>
          ))}
        </div>
        <div className="text-center">
          <ButtonSecondary color={"bg-primaryDark"}>See All</ButtonSecondary>
        </div>
      </div>
    </section>
  );
};

export default NewTools;
