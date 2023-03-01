import React, { useEffect, useState } from "react";
import ButtonSecondary from "../../components/ButtonSecondary";
import ToolCard2 from "../../components/ToolCard2";

const ComerTools = () => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/newtools")
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return (
    <section className="container mx-auto px-5 my-12">
      <div className="grid md:grid-cols-2 gap-8">
        {tool.map((data, id) => (
          <ToolCard2 key={id} data={data}></ToolCard2>
        ))}
      </div>
      <div className="text-center my-12">
        <ButtonSecondary color={"bg-primaryDark"}>See All</ButtonSecondary>
      </div>
    </section>
  );
};

export default ComerTools;
