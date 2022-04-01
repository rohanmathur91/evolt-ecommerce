import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const [loader, setLoader] = useState(false);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const {
    _id,
    alt,
    image,
    price,
    oldPrice,
    inStock,
    productName,
    discount,
    description,
  } = product ?? {};

  useScrollToTop();
  useDocumentTitle("Product Details");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { product },
        } = await axios.get(`/api/products/${productId}`);

        setProduct(product);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return loader ? (
    <h4 className="text-center mt-2 p-1">Loading wishlist...</h4>
  ) : (
    <>
      <h3 className="mt-8 mb-3 text-center">Product details</h3>
      <div className="flex-row flex-center wrap transition-2 m-1 p-1 rounded-sm">
        <div className="product-image text-center">
          <img src={image} alt={alt} />
        </div>
        <div className="product-content flex-column content-space-between py-2 px-3">
          <div className="w-100">
            <h4 className="font-semibold my-1">{productName}</h4>
            <p className="product-description my-2">{description}</p>
            <div className="product-rating flex-row mt-2">
              <span className="font-base">4.0</span>

              <div className="rating ml-1 flex-row flex-center">
                <i className="fa fa-star rated"></i>
                <i className="fa fa-star rated"></i>
                <i className="fa fa-star rated"></i>
                <i className="fa fa-star rated"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>

            <div className="mb-1">
              <span className="mr-2 font-bold">₹{price}</span>
              <span className="gray">
                <s>₹{oldPrice}</s>
              </span>
            </div>
            <p className="gray font-bold mb-1">{discount}% off</p>
          </div>

          <button className="btn btn-solid font-semibold items-end transition-2 mt-1">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
