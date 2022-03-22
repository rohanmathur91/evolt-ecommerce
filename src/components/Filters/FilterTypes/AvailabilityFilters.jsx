import React from "react";
import { Checkbox } from "../Checkbox";
import { useProduct } from "../../../contexts";
import { FILTER_BY_PRICE, FILTER_BY_IN_STOCK_ONLY } from "../../../reducer";
import "../Filter.css";

export const AvailabilityFilters = () => {
  const {
    productFilter: { price, inStockOnly },
    productDispatch,
  } = useProduct();

  return (
    <>
      <div className="filter-header text-base py-2 mt-2 font-bold">
        Availability & Price
      </div>
      <ul>
        <li className="filter-item mb-2">
          <Checkbox
            id="filter-stock"
            value={inStockOnly}
            actionType={FILTER_BY_IN_STOCK_ONLY}
            title="In stock only"
          />
        </li>

        <li className="filter-item flex-column mb-1">
          <label htmlFor="price-range">Price range: 0 to {price}</label>
          <input
            min="0"
            max="5000"
            step="50"
            type="range"
            value={price}
            id="price-range"
            className="cursor-pointer"
            onChange={(e) =>
              productDispatch({
                type: FILTER_BY_PRICE,
                payload: Number(e.target.value),
              })
            }
          />
        </li>
      </ul>
    </>
  );
};
