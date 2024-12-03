"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import DropdownMenu from "./ui/DropdownMenu";
import NavbarSearch from "./ui/NavbarSearch";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#eff4f9] h-[6rem] text-black flex items-center justify-between px-4 lg:px-10 shadow-md">
      {isSearchActive ? (
        <NavbarSearch onClose={toggleSearch} />
      ) : (
        <>
          {/* Menu and Search */}
          <div className="relative flex gap-4 lg:gap-6">
            <button className="flex gap-1 items-center" onClick={toggleDropdown}>
              <CiMenuBurger /> <span className="hidden sm:inline">Menu</span>
            </button>

            {/* Dropdown Menu */}
            <DropdownMenu isOpen={isDropdownOpen} onClose={() => setIsDropdownOpen(false)} />

            <button className="flex gap-1 items-center" onClick={toggleSearch}>
              <CiSearch /> <span className="hidden sm:inline">Search</span>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Image src="/asset/logo.svg" width={150} height={40} alt="Logo" className="w-auto sm:w-[150px] md:w-[195px]" />
          </div>

          {/* Navbar list */}
          <ul className="hidden lg:flex gap-8 text-[#636363] capitalize">
            <li><a href="">shirt factory</a></li>
            <li><a href="">tailor room</a></li>
            <li><a href="">account</a></li>
            <li><a href="">cart</a></li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
