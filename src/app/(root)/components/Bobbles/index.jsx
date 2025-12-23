import React from "react";

const Bobble = ({ color = "bg-brand-green-dark", className }) => {
  return (
    <span
      className={`absolute inline-block  rounded-full  ${color}  ${className}`}
    ></span>
  );
};

export default Bobble;
