import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../contexts";
import { FILTER_BY_BRAND } from "../../reducer";
import { brandImages } from "../../staticData";

export const BrandList = () => {
  const { productDispatch } = useProduct();

  const handleBrandClick = (brandName) => {
    productDispatch({ type: FILTER_BY_BRAND, payload: brandName });
  };

  return (
    <article className="mb-4">
      <h2 className="text-center mt-6 mb-2">Top Brands</h2>
      <div className="w-80 m-auto flex-row wrap flex-center gutter-bottom">
        {brandImages.map(({ image, brandName }) => (
          <Link
            to="/products"
            key={brandName}
            onClick={() => handleBrandClick(brandName)}
          >
            <img src={image} alt="brand-logo" className="w-10 m-1" />
          </Link>
        ))}
      </div>
    </article>
  );
};
