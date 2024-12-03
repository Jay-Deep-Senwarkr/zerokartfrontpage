import React from "react";
import { videoData } from "../../util";

const Behind = () => {
  return (
    <div className="bg-white px-4 py-16 lg:px-20">
      {/* Title Section */}
      <p className="text-[#424242] text-2xl lg:text-[32px] font-bold text-center lg:text-left lg:pl-20">
        Behind Our Clothes
      </p>

      {/* Videos Section */}
      <div className="flex flex-col lg:flex-row flex-wrap gap-12 mt-10 justify-center lg:justify-start lg:ml-20">
        {videoData.map((video, index) => (
          <div key={index} className="w-full lg:w-[470px]">
            {/* Video */}
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              preload="none"
            >
              <source src={video.src} type="video/mp4" />
            </video>

            {/* Video Title */}
            <p className="uppercase text-[#636363] font-bold text-[16px] pt-4 text-center lg:text-left">
              {video.title}
            </p>

            {/* Video Description */}
            <p className="text-[#636363] text-[14px] lg:text-[16px] font-normal mt-4 w-full text-center lg:text-left">
              {video.description}
            </p>

            {/* Watch Now Link */}
            <div className="mt-6 mb-16 text-center lg:text-left">
              <a
                href=""
                className="text-[#E73A66] capitalize font-bold hover:underline"
              >
                watch now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Behind;
