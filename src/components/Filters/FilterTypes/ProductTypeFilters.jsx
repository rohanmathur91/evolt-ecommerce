import React from "react";
import { Checkbox } from "../Checkbox";
import { useProduct } from "../../../contexts";
import { FILTER_BY_TYPE } from "../../../reducer";
import "../Filter.css";

export const ProductTypeFilters = () => {
  const {
    productFilter: { types },
  } = useProduct();

  return (
    <>
      <div className="filter-header py-2 mt-2 text-base font-bold">Types</div>
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
    </>
  );
};
