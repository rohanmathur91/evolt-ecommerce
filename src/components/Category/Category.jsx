import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FILTER_BY_TYPE } from "../../reducer";
import { useProduct } from "../../contexts";
import "./Category.css";

export const Category = () => {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [categoryList, setCategorList] = useState([]);
  const { productDispatch } = useProduct();

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        setCategorList(categories);
      } catch (error) {
        setError("Cannot fetch the categories");
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
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
        {loader ? (
          <p className="m-auto p-7 my-7">Fetching categories...</p>
        ) : (
          categoryList &&
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
