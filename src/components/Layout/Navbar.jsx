import React from "react";
import { HiOutlineChevronDown, HiMenu, HiOutlineUserCircle } from "react-icons/hi";

const Navbar = ({ showSide, setShowSide }) => {
  return (
    <div className="sticky top-0 border-b flex  py-4 gap-5">
      { !showSide && <button className="ml-8 " onClick={ () => setShowSide(!showSide) } >
        <HiMenu />
      </button>
      }

      <div className="flex gap-1 items-center ml-auto ">
        <HiOutlineUserCircle className="text-[28px]" />
        <HiOutlineChevronDown />
      </div>
      <div className="flex gap-1 items-center mr-[38px] ">
        <p className="text-sm">En</p>
        <HiOutlineChevronDown />
      </div>

    </div>
  );
};

export default Navbar;
