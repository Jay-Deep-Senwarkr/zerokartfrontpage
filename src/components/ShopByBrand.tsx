import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';

const ShopByBrand = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage: `url('/asset/ShopByBrand.png')`,
      }}
    >
      <h3 className="text-white font-bold text-3xl pt-24 pl-8 md:pl-24 lg:pl-52">
        Shop By Brands
        <p className="font-normal text-sm pt-5">
          An exclusive membership program for gentlemen with fine taste and even
          finer style.
        </p>
      </h3>
      <Carousel className="relative pt-20 pl-8 md:pl-24 lg:pl-52 pr-8 md:pr-24 lg:pr-52 pb-32">
        <CarouselContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <CarouselItem className="">
            <Image src="/asset/Brands/Nike.png" width={279} height={279} />
          </CarouselItem>
          <CarouselItem className="">
            <Image src="/asset/Brands/LV.png" width={279} height={279} />
          </CarouselItem>
          <CarouselItem className="">
            <Image src="/asset/Brands/Chanel.png" width={279} height={279} />
          </CarouselItem>
          <CarouselItem className="">
            <Image src="/asset/Brands/Lacoste.png" width={279} height={279} />
          </CarouselItem>
          <CarouselItem className="">
            <Image src="/asset/Brands/Gucci.png" width={279} height={279} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 md:left-8 lg:left-16" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 md:right-8 lg:right-16" />
      </Carousel>
    </div>
  );
};

export default ShopByBrand;