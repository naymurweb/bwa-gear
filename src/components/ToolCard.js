import React from "react";
import SmallBtn from "./SmallBtn";

const ToolCard = ({ data }) => {
  console.log(data);
  const { image, id, title, details, package: pack } = data;
  return (
    <div className="rounded-lg border-solid border-2 border-myBg1 shadow-md">
      <div className="p-5">
        <div className="bg-myBg1 flex justify-center p-10">
          <img src={image} alt="" className="" />
        </div>
        <div className="flex justify-between mt-7">
          <h3 className="font-medium text-3xl text-primaryDark ">{title}</h3>
          <h4 className="text-myGreen font-medium text-lg">{pack}</h4>
        </div>
        <p className="my-2 text-secondaryDark">{details}</p>
        <div className="flex gap-4 my-4">
          <SmallBtn>Design</SmallBtn>
          <SmallBtn>Development</SmallBtn>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
