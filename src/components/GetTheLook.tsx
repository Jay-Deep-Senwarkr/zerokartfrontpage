import React from "react";
import ProductTile from "./ui/ProductTile";
import { getTheLooks } from "../../util";
import Image from "next/image";
import { Button } from "./ui/button";

const GetTheLook = () => {
  return (
    <div className="bg-[#eff4f9] relative h-auto lg:h-[850px] px-4 py-8 lg:py-0">
      {/* Model Image - Positioned absolutely and set to lower z-index */}
      <div className="absolute right-[10%] top-[20px] lg:right-[84px] lg:top-[65px] z-0 w-[200px] lg:w-[600px]">
        <Image
          src="/asset/Model.png"
          height={712}
          width={600}
          alt="Model"
          className="object-contain w-full"
        />
      </div>

      {/* Header Section - Higher z-index */}
      <div className="relative z-10 lg:pt-[106px] lg:pl-[208px] pt-4 pl-4 text-center lg:text-left">
        <h3 className="font-bold text-2xl lg:text-4xl text-[#424242]">
          Get The Look{" "}
        </h3>
        <p className="font-normal text-sm lg:text-base mt-2 lg:mt-4 mb-4 lg:mb-4">
          An Exclusive Membership Program For Gentlemen With Fine Taste And Even
          Finer Style.
        </p>
      </div>

      {/* Products Container - Higher z-index */}
      <div className="w-full lg:w-[1146px] h-auto lg:h-[462px] mt-4 lg:mt-2 mx-auto lg:ml-52 bg-white p-4 lg:p-8 relative z-10 rounded-lg shadow-sm">
        <div className="flex flex-col lg:flex-row lg:gap-5 gap-4 items-center lg:items-stretch">
          {getTheLooks.map((look, index) => (
            <ProductTile
              key={index}
              buttonLabel={look.buttonLabel || "add to cart"}
              buttonVariant="cart"
              imageUrl={look.imageUrl}
              price={look.price}
              title={look.title}
              className="w-full lg:w-auto"
            />
          ))}
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-8 lg:mt-[66px] text-center lg:text-left lg:ml-[206px]">
        <Button className="uppercase w-full lg:w-auto">
          shop now all products collection
        </Button>
      </div>
    </div>
  );
};

export default GetTheLook;
