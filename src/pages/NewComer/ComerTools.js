import React, { useEffect, useState } from "react";
import ToolCard2 from "../../components/ToolCard2";
import "../../stylesheet/pagination.css";

const ComerTools = () => {
  const [tool, setTool] = useState([]);
  const [page, setPage] = useState(0);
  const [totalTools, setTotalTools] = useState(0);

  useEffect(() => {
    fetch(`https://bwa-gear.onrender.com/tools?_page=${page}&_limit=${parPage}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [page]);

  useEffect(() => {
    fetch(`https://bwa-gear.onrender.com/tools`)
      .then((res) => res.json())
      .then((data) => setTotalTools(data?.length));
  }, [page]);

  // pagination
  const parPage = 10;
  const pages = Math.ceil(totalTools / parPage);

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
            className={`btn border px-5 py-2 mx-1 text-xl font-medium rounded-sm ${
              page === number && "selected"
            }`}
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
