import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCart } from "../../contexts";
import { INITIALIZE_WISHLIST } from "../../reducer";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { ProductCard } from "../../components";
import "./Wishlist.css";

export const Wishlist = () => {
  const [loader, setLoader] = useState(false);
  const { wishlist, cartDispatch } = useCart();

  useScrollToTop();
  useDocumentTitle("Wishlist");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { wishlist },
        } = await axios.get("/api/user/wishlist", {
          headers: { authorization: localStorage.getItem("token") },
        });

        cartDispatch({
          type: INITIALIZE_WISHLIST,
          payload: wishlist,
        });
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return loader ? (
    <h4 className="text-center mt-6 p-1">Loading wishlist...</h4>
  ) : (
    <>
      <h3 className="mt-6 mb-3 text-center">My Wishlist</h3>
      {wishlist.length ? (
        <div className="products-container w-100 p-1 mt-2 mb-6">
          {wishlist.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">No product in wishlist.</p>
      )}
    </>
  );
};
