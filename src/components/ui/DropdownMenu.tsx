import React from "react";
import { dropdownMenuItems } from "../../../util";
// Adjust the path as needed

type DropdownMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose }) => {
  // Return null if the menu is not open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-[#191919BF] text-white z-50 cursor-pointer"
      onClick={onClose} // Close menu when clicking on the backdrop
    >
      <div
        className="flex flex-col lg:flex-row items-start lg:items-center w-full h-full px-6 py-8 lg:px-10 lg:py-10 justify-center lg:justify-start gap-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent onClose when clicking inside the menu
      >
        {dropdownMenuItems.map((category, index) => (
          <ul
            key={index}
            className={`flex flex-col gap-4 ${
              category.hasDivider
                ? "border-r-[1px] border-gray-700 pr-6 lg:pr-10 justify-center"
                : "pl-0 lg:pl-10"
            } capitalize ${index > 0 ? "mt-6 lg:ml-[128px]" : ""}`}
          >
            <li className="font-bold text-xl lg:text-2xl">{category.title}</li>
            {category.items.map((item, i) => (
              <li
                key={i}
                className="hover:text-[#F2653A] transition-colors duration-200 text-base lg:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
