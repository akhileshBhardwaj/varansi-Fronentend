import React from "react";
import { shopVaranasiServices } from "./ShopVaranasiData";

const ShopVaranasiServices = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-y-6 rounded-[28px] border border-[#f0e4db] bg-[#fffaf6] px-4 py-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-[#eadfd8] lg:py-5">
      {shopVaranasiServices.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.id}
            className="group flex cursor-default items-center gap-4 px-5"
          >
            <span className="flex h-15.5 w-15.5 shrink-0 items-center justify-center rounded-full bg-[#fbe9e0] text-[#8b1a1a] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#741717] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(116,23,23,0.35)]">
              <Icon size={26} strokeWidth={1.4} />
            </span>

            <div className="min-w-0">
              <h5 className="text-[15px] font-semibold text-[#1f1a18] transition-colors duration-300 group-hover:text-[#741717]">
                {service.title}
              </h5>
              <p className="mt-0.5 text-[13.5px] text-[#7d726d]">
                {service.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopVaranasiServices;
