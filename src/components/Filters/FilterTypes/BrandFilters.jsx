import React from "react";
import { Checkbox } from "../Checkbox";
import { useProduct } from "../../../contexts";
import { FILTER_BY_BRAND } from "../../../reducer";
import "../Filter.css";

export const BrandFilters = () => {
  const {
    productFilter: { brands },
  } = useProduct();

  return (
    <>
      <div className="filter-header py-2 mt-2 text-base font-bold">Brands</div>
      <ul>
        <li className="filter-item mb-1">
          <Checkbox
            id="filter-bose"
            value={brands.bose}
            actionType={FILTER_BY_BRAND}
            payload="bose"
            title="Bose"
          />
        </li>
        <li className="filter-item mb-1">
          <Checkbox
            id="filter-boat"
            value={brands.boat}
            actionType={FILTER_BY_BRAND}
            payload="boat"
            title="Boat"
          />
        </li>
        <li className="filter-item mb-1">
          <Checkbox
            id="filter-marshall"
            value={brands.marshall}
            actionType={FILTER_BY_BRAND}
            payload="marshall"
            title="Marshall"
          />
        </li>
        <li className="filter-item mb-1">
          <Checkbox
            id="filter-sony"
            value={brands.sony}
            actionType={FILTER_BY_BRAND}
            payload="sony"
            title="Sony"
          />
        </li>
        <li className="filter-item mb-1">
          <Checkbox
            id="filter-jbl"
            value={brands.jbl}
            actionType={FILTER_BY_BRAND}
            payload="jbl"
            title="JBL"
          />
        </li>
      </ul>
    </>
  );
};
