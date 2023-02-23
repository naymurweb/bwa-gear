import React from "react";

const ButtonPrimary = ({ children }) => {
  return (
    <div>
      <button className="text-myWhite bg-secondary px-8 py-3 rounded-lg">
        {children}
      </button>
    </div>
  );
};

export default ButtonPrimary;
