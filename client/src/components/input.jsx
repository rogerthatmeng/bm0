import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full cursor-pointer mb-5 input-wrapper relative">
      <input
        type="text"
        className={`py-2 w-full border-b-[2px] border-gray-400 hover:border-[#0079c1] focus:border-[#0079c1]`}
        placeholder={title}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
