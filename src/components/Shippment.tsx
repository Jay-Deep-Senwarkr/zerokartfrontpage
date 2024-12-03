import Image from "next/image";
import React from "react";

const Shippment = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-60 justify-around items-center bg-gray-800 py-8 px-4">
      <div className="flex items-center gap-4 md:gap-7 mb-6 md:mb-0">
        <Image src="/asset/Policy/truck.svg" width={82} height={67} alt="Truck" />
        <div className="text-center md:text-left">
          <p className="text-white font-bold">Free Shipping & Return</p>
          <p className="text-gray-300 text-sm">Easy 14 Days Return And Exchange</p>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-7 mb-6 md:mb-0">
        <Image src="/asset/Policy/Return.svg" width={82} height={67} alt="Return" />
        <div className="text-center md:text-left">
          <p className="text-white font-bold">Money Back Guarantee</p>
          <p className="text-gray-300 text-sm">Easy 14 Days Return And Exchange</p>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-7">
        <Image src="/asset/Policy/clock.svg" width={82} height={67} alt="Clock" />
        <div className="text-center md:text-left">
          <p className="text-white font-bold">24/7 Online Support</p>
          <p className="text-gray-300 text-sm">Easy 14 Days Return And Exchange</p>
        </div>
      </div>
    </div>
  );
};

export default Shippment;
