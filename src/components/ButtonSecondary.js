import React from "react";

const ButtonSecondary = ({ children }) => {
  return (
    <div>
      <button className="text-myWhite bg-secondary px-5 py-2 rounded-lg">
        {children}
      </button>
    </div>
  );
};

export default ButtonSecondary;
