import React, { useState } from "react";
import { useProduct } from "../../contexts";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Filters,
  SortFilter,
  MobileFilter,
  MobileSortFilter,
  ProductCard,
} from "../../components";
import "./Products.css";

export const Products = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSortFilter, setShowSortFilter] = useState(false);
  const { isLoading, sortedProducts } = useProduct();

  useScrollToTop();
  useDocumentTitle("Products");

  return (
    <div className="flex-row">
      <aside className="filters flex-column py-3 px-4 border-r">
        <SortFilter />
        <Filters />
      </aside>

      {isLoading ? (
        <div className="loader products-loader w-100 flex-column flex-center">
          <CircularProgress />
        </div>
      ) : sortedProducts.length ? (
        <main className="products-container w-100 p-1 pt-5">
          {sortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </main>
      ) : (
        <p className="not-available">No products to show.</p>
      )}

      {showSortFilter && (
        <MobileSortFilter
          showSortFilter={showSortFilter}
          setShowSortFilter={setShowSortFilter}
        />
      )}
      {showFilter && <MobileFilter setShowFilter={setShowFilter} />}

      <div className="mobile-filter-container fixed left-0 bottom-0 flex-row w-100">
        <button
          onClick={() => setShowSortFilter((prevShowFilter) => !prevShowFilter)}
          className="sort-btn flex-row flex-center filter-btn py-1 px-2 w-100 transition-3"
        >
          <span className="material-icons-outlined mr-1">sort</span>
          Sort
        </button>
        <button
          onClick={() => setShowFilter((prevShowFilter) => !prevShowFilter)}
          className="filter-btn flex-row flex-center p-2 w-100 transition-3"
        >
          <span className="material-icons-outlined mr-1">filter_alt</span>
          Filter
        </button>
      </div>
    </div>
  );
};
