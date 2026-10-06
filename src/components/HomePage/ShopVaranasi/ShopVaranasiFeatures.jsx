import React from "react";
import { shopVaranasiFeatures } from "./ShopVaranasiData";

const ShopVaranasiFeatures = () => {
  return (
    <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-[#eadfd8]/80">
      {shopVaranasiFeatures.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.id}
            className="group flex cursor-default flex-col items-center px-3 text-center"
          >
            <span className="flex h-19.5 w-19.5 items-center justify-center rounded-full bg-[#fbe9e0] text-[#8b1a1a] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:bg-[#741717] group-hover:text-white group-hover:shadow-[0_10px_26px_rgba(116,23,23,0.35)]">
              <Icon size={32} strokeWidth={1.4} />
            </span>

            <h4 className="mt-4 text-[15px] font-semibold text-[#1f1a18] transition-colors duration-300 group-hover:text-[#741717]">
              {feature.title}
            </h4>

            <p className="mt-1 text-[13px] text-[#7d726d]">{feature.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShopVaranasiFeatures;