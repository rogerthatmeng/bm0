import React from "react";
import { BiChat } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Footer from "./footer";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div className="h-[calc(100vh_-_194px)] flex flex-col justify-between w-full">
      <div className="-mt-8">
        <form
          className="w-full max-w-[97%] md:max-w-[500px] mx-auto bg-white py-6 px-4 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          {title && (
            <h1 className="mb-[40px] font-[600] text-[34px] leading-[40px]">
              {title}
            </h1>
          )}
          {subTitle && <p className="mb-4 text-sm">{subTitle}</p>}
          <div>{children}</div>
          <div className="flex items-center justify-evenly gap-5 mt-2">
            <div className="flex gap-1 flex-col items-center justify-center ">
              <div className="flex items-center justify-center p-2 bg-[#0079c1] size-[36px] rounded-full">
                <BiChat
                  fill="#ffffff"
                  size={20}
                />
              </div>
              <span className="font-semibold uppercase text-[#0079c1] text-sm">
                BMO assist
              </span>
            </div>
            <div className="flex gap-1 flex-col items-center justify-center ">
              <div className="flex items-center justify-center p-2 bg-[#0079c1] size-[36px] rounded-full">
                <FaPhoneAlt
                  fill="#ffffff"
                  size={18}
                />
              </div>
              <span className="font-semibold uppercase text-[#0079c1] text-sm">
                Contact us
              </span>
            </div>
            <div className="flex gap-1 flex-col items-center justify-center ">
              <div className="flex items-center justify-center p-2 bg-[#0079c1] size-[36px] rounded-full">
                <IoLocation
                  fill="#ffffff"
                  size={18}
                />
              </div>
              <span className="font-semibold uppercase text-[#0079c1] text-sm">
                Find us
              </span>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default FormLayout;
