import React, { useEffect, useState } from "react";
import ToolCard2 from "../../components/ToolCard2";
import "../../stylesheet/pagination.css";

const ComerTools = () => {
  const [tool, setTool] = useState([]);
  const [page, setPage] = useState(0);
  // pagination
  const count = tool.length;
  const parPage = 6;
  const pages = Math.ceil(count / parPage);
  useEffect(() => {
    fetch(`http://localhost:9000/newtools`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [pages]);

  return (
    <section className="container mx-auto px-5 my-12">
      <div className="grid md:grid-cols-2 gap-8">
        {tool.map((data, id) => (
          <ToolCard2 key={id} data={data}></ToolCard2>
        ))}
      </div>
      <div className="text-center my-12">
        {[...Array(pages).keys()].map((number) => (
          <button
            className={`btn bg-green-400 mx-2 ${page === number && "selected"}`}
            onClick={() => setPage(number)}
            key={number}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ComerTools;
