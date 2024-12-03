import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";

const Blac = () => {
  return (
    <div className="bg-black">
      <Carousel
        className="w-full h-full"
        autoScrollEnabled={true}
        autoScrollInterval={5000}>
        <CarouselContent>
          <CarouselItem>
            <Image src="/asset/blac/BlacTile.png" height={1217} width={1920} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/asset/blac/BlacTile2.png" height={1217} width={1920} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/asset/blac/BlacTile3.png" height={1217} width={1920} />
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center">
          <Button
            variant="outline"
            className=" w-1/3 rounded-full text-lg uppercase h-14 justify-center items-center flex border-white mb-10">
            Explore shirt factory
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export default Blac;
