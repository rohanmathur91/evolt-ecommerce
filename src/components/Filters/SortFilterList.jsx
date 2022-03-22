import React from "react";
import { useProduct } from "../../contexts";
import { SORT } from "../../reducer";

const sortFilters = [
  { id: "latest", filter: "Latest", sortProduct: "SORT_BY_LATEST" },
  {
    id: "low-to-high",
    filter: "Price (Low to High)",
    sortProduct: "SORT_BY_LOW_TO_HIGH",
  },
  {
    id: "high-to-low",
    filter: "Price (High to Low)",
    sortProduct: "SORT_BY_HIGH_TO_LOW",
  },
];

export const SortFilterList = ({ showSortFilter }) => {
  const {
    productFilter: { sortBy },
    productDispatch,
  } = useProduct();

  return (
    <>
      <ul>
        {sortFilters.map(({ id, filter, sortProduct }) => (
          <li key={id} className="filter-item mb-1">
            <label htmlFor={id} className="cursor-pointer">
              <input
                id={id}
                type="radio"
                name={
                  !showSortFilter ? "sort-by-price" : "mobile-sort-by-price"
                }
                className="cursor-pointer mr-2"
                checked={sortBy === sortProduct}
                onChange={() => {
                  productDispatch({ type: SORT, payload: sortProduct });
                }}
              />
              {filter}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

SortFilterList.defaultProps = { showSortFilter: false };
