import React from "react";
import {
  BrandFilters,
  AvailabilityFilters,
  ProductTypeFilters,
} from "./FilterTypes";
import "./Filters.css";

export const Filters = () => {
  return (
    <>
      <div className="flex-column">
        <AvailabilityFilters />
        <ProductTypeFilters />
        <BrandFilters />
      </div>
    </>
  );
};
