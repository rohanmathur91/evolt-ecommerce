import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { CLEAR_FILTER, FILTER_BY_TYPE } from "../../reducer";
import { useProduct } from "../../contexts";
import "./Category.css";

export const Category = () => {
  const { isLoading, categoryList, productDispatch } = useProduct();

  const handleCategoryClick = (category) => {
    productDispatch({ type: CLEAR_FILTER });
    productDispatch({
      type: FILTER_BY_TYPE,
      payload: category.toLowerCase().split(" ").join("_"),
    });
  };

  return (
    <>
      <div className="text-base font-semibold flex-row content-space-between mx-5 gutter-bottom">
        <div className="category-header font-semibold">Categories</div>
        <Link to="/products" className="flex-row flex-center">
          <span className="category-header-btn font-semibold">Shop now</span>{" "}
          <span className="material-icons-outlined font-base ml-1">east</span>
        </Link>
      </div>
      <article className="category">
        {isLoading ? (
          <div className="loader h-100 w-100 py-8 flex-column flex-center">
            <CircularProgress />
          </div>
        ) : (
          categoryList.length &&
          categoryList.map(({ _id, alt, image, category }) => (
            <Link
              key={_id}
              to="/products"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="category-item flex-column rounded-sm">
                <img className="p-1" src={image} alt={alt} />
                <p className="category-name text-center p-1 rounded-sm font-semibold">
                  {category}
                </p>
              </div>
            </Link>
          ))
        )}
      </article>
    </>
  );
};
