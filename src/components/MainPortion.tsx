import React from "react";
import Tile from "./ui/Tile";

const MainPortion = () => {
  return (
    <div className="grid gap-5 mt-12 mx-5 lg:mx-52 mb-16 md:grid-cols-2">
      {/* Women's Collection */}
      <Tile
        height="764px"
        width="100%"
        imageUrl="/asset/Women.png"
        title="Women's Collection"
        description="Get Lastest Professional Trends This Winter Only On Zerocart"
        buttonLabel="LEARN MORE"
        textPosition="bottom-left"
        buttonVariant="outline"
      />

      <div className="grid gap-5 md:grid-rows-2">
        {/* FLAT 20% OFF */}
        <Tile
          height="364px"
          width="100%"
          imageUrl="/asset/handbag.png"
          title="FLAT 20% OFF"
          description="Get Lastest Professional Trends This Winter Only On Zerocart"
          buttonLabel="LEARN MORE"
          textPosition="bottom-right"
          buttonVariant="outline"
        />

        <div className="grid gap-5 grid-cols-2 pt-2">
          {/* Winter Wear */}
          <Tile
            height="364px"
            width="100%"
            imageUrl="/asset/Winter.png"
            title="Winter Wear"
            buttonLabel="LEARN MORE"
            textPosition="bottom-right"
            buttonVariant="default"
          />

          {/* Shoes */}
          <Tile
            height="364px"
            width="100%"
            imageUrl="/asset/Shoes.png"
            title="Shoes"
            buttonLabel="LEARN MORE"
            textPosition="bottom-right"
            buttonVariant="default"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPortion;
