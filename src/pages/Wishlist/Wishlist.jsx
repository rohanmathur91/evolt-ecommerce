import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { ProductCard } from "../../components";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useCart();

  useScrollToTop();
  useDocumentTitle("Wishlist");

  return (
    <>
      {wishlist.length ? (
        <>
          <h3 className="mt-6 mb-3 text-center">My Wishlist</h3>
          <div className="products-container w-100 p-1 mt-2 mb-6">
            {wishlist.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="not-available text-center px-1">
          <p className="text-lg font-semibold mb-1">Your wishlist is empty.</p>
          <p>
            Explore more products,{" "}
            <Link to="/products" className="continue">
              continue shopping
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
};
