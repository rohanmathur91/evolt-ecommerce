import React from "react";
import { useCart, useOrder } from "../../contexts";
import "./CartDetails.css";

export const CartDetails = () => {
  const { selectedAddressId } = useOrder();
  const { cartProducts, totalPrice, totalDiscount, totalAmount, totalSave } =
    useCart();

  return (
    <div className="cart-details my-4 mx-2">
      <button className="btn btn-outlined rounded-sm w-100 mb-1 icon font-semibold transition-2">
        <span className="material-icons-outlined mr-1">local_offer</span> Apply
        coupon
      </button>

      <div className="border flex-start p-3 rounded-sm">
        <p className="pb-1 font-bold border-bottom pb-2">Price Details</p>
        <div className="flex-row content-space-between mt-1 py-1">
          <span>Price({cartProducts.length} items)</span>
          <span>₹{totalPrice}</span>
        </div>
        <div className="flex-row content-space-between py-1">
          <span>Discount</span>
          <span className="text-green font-semibold">
            - ₹{totalDiscount.toFixed(2)}
          </span>
        </div>
        <div className="border-bottom flex-row content-space-between pt-1 pb-2">
          <span>Delivery Charges</span>
          <span className="text-green font-semibold">Free</span>
        </div>
        <div className="border-bottom font-bold flex-row content-space-between py-2 mb-1">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
        <p className="py-1 text-green font-semibold">
          You will save ₹{totalSave} on this order
        </p>
        <button
          disabled={selectedAddressId}
          className={`${
            !selectedAddressId ? "disable" : ""
          } btn btn-solid w-100 font-semibold items-end transition-2 p-1 mt-1`}
        >
          Place Order
        </button>
      </div>

      {!selectedAddressId && (
        <p className="text-center address-message icon text-sm mt-1">
          <span className="material-icons-outlined mr-1">info</span> Please
          select an address to continue
        </p>
      )}
    </div>
  );
};
