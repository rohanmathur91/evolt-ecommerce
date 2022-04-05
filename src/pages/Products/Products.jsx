import axios from "axios";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useProduct } from "../../contexts";
import { useScrollToTop, useDocumentTitle, useToast } from "../../hooks";
import { FETCH_PRODUCTS } from "../../reducer";
import {
  Filters,
  SortFilter,
  MobileFilter,
  MobileSortFilter,
  ProductCard,
} from "../../components";
import "./Products.css";

export const Products = () => {
  const [loader, setLoader] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSortFilter, setShowSortFilter] = useState(false);
  const { showToast } = useToast();
  const { sortedProducts, productDispatch } = useProduct();

  useScrollToTop();
  useDocumentTitle("Products");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { products },
        } = await axios.get("/api/products");
        productDispatch({ type: FETCH_PRODUCTS, payload: products });
        setLoader(false);
      } catch (error) {
        showToast("error", "Something went wrong!");
      }
    })();
  }, []);

  return (
    <div className="flex-row">
      <aside className="filters flex-column py-3 px-4 border-r">
        <SortFilter />
        <Filters />
      </aside>

      {loader ? (
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
