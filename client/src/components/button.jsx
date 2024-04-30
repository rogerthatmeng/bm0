import React from "react";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} my-5 p-4 bg-[#0079c1] font-[600] uppercase rounded-[50px] text-center text-[#ffffff] w-full`}
    >
      {title}
    </button>
  );
};

export default Button;
