import React from "react";
import { Checkbox } from "./Checkbox";
import { AvailabilityFilters } from "./FilterTypes";
import { useProduct } from "../../contexts";
import { FILTER_BY_BRAND, FILTER_BY_TYPE } from "../../reducer";
import "./Filter.css";

export const Filter = () => {
  const {
    productFilter: { brands, types },
    productDispatch,
  } = useProduct();

  return (
    <>
      <div className="flex-column">
        <AvailabilityFilters />
        <div className="filter-header py-2 mt-2 text-base font-bold">Brand</div>
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

        <div className="filter-header py-2 mt-2 text-base font-bold">Type</div>
        <ul>
          <li className="filter-item mb-1">
            <Checkbox
              id="filter-wired"
              value={types.wired}
              actionType={FILTER_BY_TYPE}
              payload="wired"
              title="Wired"
            />
          </li>
          <li className="filter-item mb-1">
            <Checkbox
              id="filter-wireless"
              value={types.wireless}
              actionType={FILTER_BY_TYPE}
              payload="wireless"
              title="Wireless"
            />
          </li>
          <li className="filter-item mb-1">
            <Checkbox
              id="filter-speaker"
              value={types.speaker}
              actionType={FILTER_BY_TYPE}
              payload="speaker"
              title="Speaker"
            />
          </li>
          <li className="filter-item mb-1">
            <Checkbox
              id="filter-noise-cancelling"
              value={types.noiseCancelling}
              actionType={FILTER_BY_TYPE}
              payload="noiseCancelling"
              title="Noise Cancelling"
            />
          </li>
        </ul>
      </div>
    </>
  );
};
