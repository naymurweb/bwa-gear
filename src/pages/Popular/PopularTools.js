import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import ToolCard from "../../components/ToolCard";

const PopularTools = () => {
  const [tools, setTools] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataParPage, setParPage] = useState(9);
  useEffect(() => {
    fetch("http://localhost:9000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  // get current page
  const indexOfLastPost = currentPage * dataParPage;
  const indexOfFirstPost = indexOfLastPost - dataParPage;
  const currentData = tools.slice(indexOfFirstPost, indexOfLastPost);
  //  change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="container mx-auto px-5">
      <div className="grid md:grid-cols-3 gap-8 my-12">
        {currentData.map((data, id) => (
          <ToolCard data={data} key={id}></ToolCard>
        ))}
      </div>
      <div className="my-12">
        <Pagination
          dataParPage={dataParPage}
          totalData={tools.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </section>
  );
};

export default PopularTools;
