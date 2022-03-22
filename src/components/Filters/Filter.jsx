import React from "react";
import {
  BrandFilters,
  AvailabilityFilters,
  ProductTypeFilters,
} from "./FilterTypes";
import "./Filter.css";

export const Filter = () => {
  return (
    <>
      <div className="flex-column">
        <AvailabilityFilters />
        <BrandFilters />
        <ProductTypeFilters />
      </div>
    </>
  );
};
