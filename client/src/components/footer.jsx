import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 bg-white px-3 py-2">
      <div className="border-b border-gray-300 pb-2 w-full flex items-center justify-between">
        <a
          href="#"
          className="text-[#0079c1] text-sm font-[600]"
        >
          Legal & privacy
        </a>
        <span className="text-[#001928] text-[10px]">
          App version: 17.6.65-2
        </span>
      </div>
      <div className="flex items-center justify-evenly mt-2">
        <img
          src="https://usdigital.bmo.com/www/assets/images/fdic.png"
          className="size-[48px]"
        />
        <div className="flex items-center gap-2">
          <img
            src="https://usdigital.bmo.com/www/assets/images/ehl.png"
            className="size-[48px]"
          />
          <span className="text-sm text-[#0079c1]">NMLS 401052</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
