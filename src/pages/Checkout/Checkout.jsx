import React from "react";
import { Link } from "react-router-dom";
import { useOrder, useCart } from "../../contexts";
import { getSelectedAddress } from "../../utils";
import "./Checkout.css";

export const Checkout = () => {
  const { addresses, selectedAddressId } = useOrder();
  const selectedAddress = getSelectedAddress(addresses, selectedAddressId);
  const { area, country, cityAndState, fullName, home, mobileNumber, pinCode } =
    selectedAddress ?? {};
  const { cartProducts, totalPrice, totalDiscount, totalAmount } = useCart();

  return !cartProducts.length ? (
    <div className="not-available text-center px-1">
      <p className="text-lg font-semibold mb-1">
        No order summary, since your cart is empty.
      </p>
      <p>
        Check your wishlist for favourite items or{" "}
        <Link to="/products" className="continue">
          continue shopping
        </Link>
        .
      </p>
    </div>
  ) : (
    <>
      <h3 className="mt-6 text-center">Order Summary</h3>
      <div className="order-summary my-4 flex-column flex-center px-2">
        {cartProducts.map(
          ({ _id, image, alt, description, productName, qty, price }) => (
            <Link
              title={productName}
              to={`/product/${_id}`}
              className="product-row flex-row w-100 py-2"
            >
              <img
                src={image}
                alt={alt}
                className="w-10 h-10 rounded-sm mr-4"
              />
              <div className="flex-column content-space-between">
                <div>
                  <p className="text-base font-semibold mt-1">{productName}</p>
                  <p className="text-sm order-product-description mt-1">
                    {description}
                  </p>
                </div>
                <div>
                  <span className="text-sm pr-2 border-r">Quantity: {qty}</span>
                  <span className="text-sm pl-2">Price: ₹{price}</span>
                </div>
              </div>
            </Link>
          )
        )}
        <div className="order-address pb-4 my-4 w-100">
          <h4>Delivery Address</h4>
          <div className="order-address-details mt-1">
            <p>
              {fullName}, {home}, {area}
            </p>
            <p>
              {cityAndState} - {pinCode}, {country}
            </p>
            <p className="mt-1">Contact: {mobileNumber}</p>
          </div>
        </div>

        <div className="w-100 mb-8">
          <div className="flex-row content-space-between my-1">
            <span>Subtotal ({cartProducts.length} items)</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex-row content-space-between my-1">
            <span>Discount</span>
            <span>- ₹{totalDiscount.toFixed(2)}</span>
          </div>
          <div className="flex-row content-space-between my-1">
            <span>Delivery Charges</span>
            <span>Free</span>
          </div>
          <div className="flex-row content-space-between font-semibold my-1">
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
          </div>
          <button
            onClick={() => alert("Order placed 🎉🎉")}
            className="btn btn-solid w-100 font-semibold transition-2 p-1 mt-1"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
