import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

type NavbarSearchProps = {
  onClose: () => void;
};

const NavbarSearch: React.FC<NavbarSearchProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between w-full px-10">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <Image src="/asset/logo.svg" width={150} height={40} alt="Logo" />
      </div>

      {/* Search Input */}
      <div className="flex-1 mx-4 flex items-center justify-center text-[#636363]">
        <div className="relative flex items-center justify-center text-[#636363]">
          <input
            type="text"
            placeholder="Search..."
            className="w-[714px] pl-10 pr-4 py-2 border border-[#CACACA] rounded-lg focus:outline-none focus:border-[#F2653A] placeholder-[#636363] bg-[#E9E9E9]"
          />
          <FaSearch className="w-[78px] text-[#636363]" />
        </div>
      </div>

      {/* Close Button */}
      <button onClick={onClose} className="text-gray-600">
        Close
      </button>
    </div>
  );
};

export default NavbarSearch;
