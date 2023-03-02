import React from "react";
import SmallBtn from "./SmallBtn";

const ToolCard2 = ({ data }) => {
  const { image, title, details, package: pack, color } = data;

  return (
    <div className="rounded-lg border-solid border-2 border-myBg1 shadow-md">
      <div className="p-5">
        <div className="md:flex gap-6">
          <div className="bg-myBg1 flex justify-center p-10">
            <img src={image} alt="" className="" />
          </div>
          <div className=" mt-7">
            <div className="flex justify-between">
              <h3 className="font-medium text-3xl text-primaryDark ">
                {title}
              </h3>
              <h4
                  className={`${
                    (color === "primary" && "text-secondary") ||
                    (color === "myYellow" && "text-myYellow") ||
                    (color === "myGreen" && "text-myGreen")
                  } font-medium text-lg`}
              >
                {pack}
              </h4>
            </div>
            <p className="my-2 text-secondaryDark">{details}</p>
            <div className="flex gap-4">
              <SmallBtn>Design</SmallBtn>
              <SmallBtn>Development</SmallBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard2;
