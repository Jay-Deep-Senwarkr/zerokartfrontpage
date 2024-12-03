import React from "react";
import { Button } from "./button";

interface ProductTileProps {
  width: string;
  height: string;
  imageUrl: string;
  title: string;
  price: string;
  link?: string;
  buttonLabel: string;
  buttonVariant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "cart"
    | null
    | undefined;
}

const ProductTile: React.FC<ProductTileProps> = ({
  width,
  buttonLabel,
  buttonVariant,
  height,
  imageUrl,
  link,
  price,
  title,
}) => {
  return (
    <div
      className="relative overflow-auto"
      style={{
        width,
        height,
      }}>
      <img src={imageUrl} alt="" />
      <div className="pt-5 text-[#636363]">
        <p className="font-bold text-lg">{title}</p>
        <p className="font-normal text-lg">₹{price}</p>
      </div>
      <div className="pt-4">
        <Button className="uppercase" variant={buttonVariant}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default ProductTile;
