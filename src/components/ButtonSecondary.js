import React from "react";

const ButtonSecondary = ({ children,color }) => {
  return (
    <div>
      <button className={`text-myWhite  px-5 py-2 rounded-lg ${color}`}>
        {children}
      </button>
    </div>
  );
};

export default ButtonSecondary;
