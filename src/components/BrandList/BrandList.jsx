import React from "react";
import { brands } from "../../staticData";

export const BrandList = () => {
  return (
    <article className="mb-4">
      <h2 className="text-center mt-6 mb-2">Top Brands</h2>
      <div className="w-80 m-auto flex-row wrap flex-center gutter-bottom">
        {brands.map(({ image }, index) => (
          <img key={index} className="w-10 m-1" src={image} alt="brand-logo" />
        ))}
      </div>
    </article>
  );
};
