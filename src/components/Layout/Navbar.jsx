import React from "react";
import { HiOutlineChevronDown, HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="sticky top-0 border-b flex justify-end py-4 gap-5">
      <div className="flex gap-1 items-center">
        <HiOutlineUserCircle className="text-[28px]" />
        <HiOutlineChevronDown />
      </div>
      <div className="flex gap-1 items-center mr-[38px]">
        <p className="text-sm">En</p>
        <HiOutlineChevronDown />
      </div>
    </div>
  );
};

export default Navbar;
