import React from "react";
import { Button } from "./button";

interface TileProps {
  width: string;
  height: string;
  imageUrl: string;
  title: string;
  description?: string;
  buttonLabel: string;
  onButtonClick?: () => void;
  textPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
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
  titlePosition?: "above" | "below";
}

const Tile: React.FC<TileProps> = ({
  width,
  height,
  title,
  description,
  buttonLabel,
  imageUrl,
  onButtonClick,
  textPosition,
  buttonVariant,
  titlePosition = "above",
}) => {
  let alignmentClasses;
  switch (textPosition) {
    case "top-left":
      alignmentClasses = "top-0 left-0";
      break;
    case "top-right":
      alignmentClasses = "top-0 right-0";
      break;
    case "bottom-left":
      alignmentClasses = "bottom-0 left-0";
      break;
    case "bottom-right":
      alignmentClasses = "bottom-0 right-0";
      break;
  }

  return (
    <div
      className="relative overflow-hidden rounded-md"
      style={{
        width,
        height,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div
        className={`absolute p-4 md:p-8 ${alignmentClasses}`}
      >
        {titlePosition === "above" && (
          <>
            <h2 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-4 w-32 md:w-48">
              {title}
            </h2>
            {description && (
              <p className="text-white text-sm md:text-base mb-2 md:mb-4 w-56 md:w-72">
                {description}
              </p>
            )}
          </>
        )}
        {titlePosition === "below" && (
          <>
            {description && (
              <p className="text-white text-sm md:text-base mb-2 md:mb-4 w-56 md:w-72">
                {description}
              </p>
            )}
            <h2 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-4 w-32 md:w-48">
              {title}
            </h2>
          </>
        )}
        <Button className="uppercase text-xs md:text-sm" variant={buttonVariant}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default Tile;
