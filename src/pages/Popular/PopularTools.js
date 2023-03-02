import React, { useEffect, useState } from "react";
import ToolCard from "../../components/ToolCard";
import "../../stylesheet/pagination.css";

const PopularTools = () => {
  const [tools, setTools] = useState([]);
  const [page, setPage] = useState(0);
  const [totalTools, setTotalTools] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:9000/tools?_page=${page}&_limit=${parPage}`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [page]);
  useEffect(() => {
    fetch("http://localhost:9000/tools")
      .then((res) => res.json())
      .then((data) => setTotalTools(data?.length));
  }, []);

  // pagination
  const parPage = 9;
  const pages = Math.ceil(totalTools / parPage);

  return (
    <section className="container mx-auto px-5">
      <div className="grid md:grid-cols-3 gap-8 my-12">
        {tools.map((data, id) => (
          <ToolCard data={data} key={id}></ToolCard>
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

export default PopularTools;
