import React from "react";
import Tile from "./ui/Tile";
import ProductTile from "./ui/ProductTile";
import { newArrivals, tileData } from "../../util";

const LeftSide = () => {
  return (
    <div className="bg-[#eff4f9] grid gap-4 pt-16 px-6 lg:grid-cols-2 lg:pt-28 lg:pl-28 lg:pb-20">
      {/* LEFT SIDE */}
      <div className="bg-yellow-50 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2">
        {tileData.map((tile, index) => (
          <div
            key={index}
            className={`${
              tile.colSpan ? `col-span-${tile.colSpan}` : "col-span-1"
            }`}
          >
            <Tile
              height={tile.height}
              width="100%"  // Set width to 100% for responsiveness
              imageUrl={tile.imageUrl}
              title={tile.title}
              description={tile.description}
              buttonLabel={tile.buttonLabel}
              textPosition="bottom-left"
              buttonVariant="secondary"
              titlePosition="below"
            />
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="pt-8 lg:pl-16 lg:pt-6 lg:pr-20">
        {/* NEW ARRIVALS */}
        <div className="text-[#424242]">
          <h2 className="text-2xl font-bold lg:text-4xl">New Arrivals</h2>
          <p className="text-xs font-bold mt-4 lg:mt-8 lg:text-sm text-[#636363]">
            Denim Shirt Design By Ace Designer, Arjun Khanna <br />
            <span className="font-normal">A Limited Edition Collection</span>
          </p>

          {/* PRODUCTS */}
          <div className="grid gap-6 mt-5 grid-cols-1 sm:grid-cols-2">
            {newArrivals.map((look, index) => (
              <ProductTile
                width="100%"  // Set width to 100% for responsiveness
                height={look.height}
                key={index}
                imageUrl={look.imageUrl}
                title={look.title}
                buttonLabel={look.buttonLabel}
                buttonVariant="cart"
                price={look.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
