import React from "react";
import { Button } from "./ui/button";
import { popularCategoris, popularCategorisImage } from "../../util";
import Image from "next/image";

const Popular = () => {
  return (
    <div className="bg-[#FFFFFF] px-4 sm:px-8 lg:px-16 py-10">
      <p className="text-3xl sm:text-4xl font-bold text-[#424242] text-center pt-10">
        Popular Categories
      </p>
      <p className="text-base sm:text-lg font-normal mt-4 sm:mt-8 text-center text-[#636363] mx-auto max-w-2xl">
        Visit one of our 23 stores to shop high-quality clothes with the help
        of our stylists. We guarantee an experience you&apos;ll never forget.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mx-4 sm:mx-8">
        {popularCategoris.map((popular, index) => (
          <Button key={index} variant="categories" className="h-16 sm:h-20">
            {popular.title}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mx-4 sm:mx-16">
        {popularCategorisImage.map((popular, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={popular.imageUrl} // Adjusted to use `popular.imageUrl` dynamically
              width={250}
              height={250}
              alt={popular.title}
              className="w-full max-w-xs h-auto"
            />
            <span className="text-[#636363] uppercase font-bold pt-4">
              {popular.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
