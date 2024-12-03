import React from "react";
import { GoDotFill } from "react-icons/go";
import { links } from "../../util";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-12 px-4 lg:px-20">
      {/* Links Section */}
      <div className="text-[#D9D9D9] font-normal text-lg lg:text-xl flex flex-wrap justify-center lg:justify-between items-center gap-2 capitalize">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a
              href={link.href}
              className="hover:underline whitespace-nowrap">
              {link.label}
            </a>
            {index < links.length - 1 && (
              <GoDotFill className="mx-2 hidden lg:inline-block" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Subscription Form & Social Media Icons */}
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Subscription Form */}
        <div className="w-full lg:w-[60%] relative">
          <Input
            type="email"
            placeholder="Enter Email to subscribe to newsletters and offers"
            className="bg-[#101010] border-[#636363] w-full pl-4 pr-[100px] text-sm lg:text-base"
          />
          <Button className="absolute right-0 top-0 h-full bg-white text-[#636363] rounded-lg px-4">
            Subscribe
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-start text-white gap-6 lg:ml-12">
          <FaFacebook className="w-6 h-6 lg:w-8 lg:h-8" />
          <FaInstagram className="w-6 h-6 lg:w-8 lg:h-8" />
          <FaYoutube className="w-6 h-6 lg:w-8 lg:h-8" />
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-10 space-y-6">
        <div className="text-[#D9D9D980] border-b-2 pb-4 border-[#636363]">
          Why Zerocart?
        </div>
        <div className="text-[#D9D9D980] border-b-2 pb-4 border-[#636363]">
          You might want to look at
        </div>
        <div className="text-[#D9D9D980] border-b-2 pb-4 border-[#636363]">
          Blogs
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-[#D9D9D980] mt-10 pb-6 text-center lg:text-left">
        &#169; Copyright 2024 - 2030
        <span className="ml-4 block lg:inline">
          Terms&nbsp;/&nbsp;Privacy&nbsp;/&nbsp;Shipping
        </span>
      </div>
    </div>
  );
};

export default Footer;
