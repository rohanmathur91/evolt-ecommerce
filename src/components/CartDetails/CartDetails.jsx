import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useOrder } from "../../contexts";
import { UPDATE_COUPON } from "../../reducer";
import { useModal } from "../../hooks";
import { getTotalAmountWithCoupon } from "../../utils";
import { ModalContainer } from "../";
import "./CartDetails.css";

export const CartDetails = () => {
  const navigate = useNavigate();
  const { coupon, selectedAddressId, orderDispatch } = useOrder();
  const { showModal, handleShowModal } = useModal();
  const { cartProducts, subTotal, totalDiscount, totalAmount, totalSave } =
    useCart();
  const totalAmountWithCoupon = getTotalAmountWithCoupon(coupon, totalAmount);

  const handleApplyCoupon = (event) => {
    orderDispatch({ type: UPDATE_COUPON, payload: event.target.value });
  };

  const handleRemoveCoupon = () => {
    orderDispatch({ type: UPDATE_COUPON, payload: "" });
  };

  return (
    <>
      {showModal && (
        <ModalContainer handleShowModal={handleShowModal}>
          <div
            onClick={(event) => event.stopPropagation()}
            className="coupon-container px-3 py-2 pr-2 mx-2 rounded-sm"
          >
            <div className="flex-row items-center">
              <h4>Special Coupons</h4>
              <button
                title="Close"
                className="ml-auto"
                onClick={() => handleShowModal(false)}
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="flex-column mt-2">
              <label htmlFor="coupon-1" className="cursor-pointer">
                <input
                  type="radio"
                  name="coupon"
                  id="coupon-1"
                  value="OFF100"
                  checked={coupon === "OFF100"}
                  className="cursor-pointer mb-2 mr-1"
                  onChange={handleApplyCoupon}
                />
                ₹100 off on total amount{" "}
                <span className="font-semibold">(OFF100)</span>
              </label>

              <label htmlFor="coupon-2" className="cursor-pointer pb-1">
                <input
                  type="radio"
                  name="coupon"
                  id="coupon-2"
                  value="10%NEWUSER"
                  checked={coupon === "10%NEWUSER"}
                  className="cursor-pointer mr-1"
                  onChange={handleApplyCoupon}
                />
                10% Discount for new users{" "}
                <span className="font-semibold">(10%NEWUSER)</span>
              </label>
            </div>
          </div>
        </ModalContainer>
      )}

      <div className="cart-details my-4 mx-2">
        <button
          onClick={() => handleShowModal(true)}
          className="btn btn-outlined rounded-sm w-100 mb-1 icon font-semibold transition-2"
        >
          <span className="material-icons-outlined mr-1 offer-icon">
            local_offer
          </span>{" "}
          Apply coupon
        </button>

        <div className="border flex-start py-2 px-3 rounded-sm">
          <p className="pb-1 font-bold border-bottom pb-2">Price Details</p>
          <div className="flex-row content-space-between mt-1 py-1">
            <span>Price({cartProducts.length} items)</span>
            <span>₹{subTotal}</span>
          </div>

          <div className="flex-row content-space-between py-1">
            <span>Product Discount</span>
            <span className="text-green font-semibold">
              - ₹{totalDiscount.toFixed(2)}
            </span>
          </div>

          <div className="flex-row content-space-between pt-1 pb-2">
            <span>Delivery Charges</span>
            <span className="text-green font-semibold">Free</span>
          </div>

          {coupon && (
            <div className="flex-row pt-1 pb-2">
              <span className="font-semibold mr-1">{coupon}</span>
              <button
                title="Remove"
                className="ml-auto"
                onClick={handleRemoveCoupon}
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
          )}

          <div className="total-amount font-bold flex-row content-space-between py-2 mb-1">
            <span>Total Amount</span>
            <span>₹{totalAmountWithCoupon}</span>
          </div>
          <p className="py-1 text-green font-semibold">
            You will save ₹{totalSave} on this order
          </p>
          <button
            title="Checkout"
            disabled={!selectedAddressId}
            onClick={() => navigate("/checkout")}
            className={`${
              !selectedAddressId ? "disable" : ""
            } btn btn-solid w-100 font-semibold items-end transition-2 p-1 mt-1`}
          >
            Checkout
          </button>
        </div>

        {!selectedAddressId && (
          <p className="text-center address-message icon text-sm mt-1">
            <span className="material-icons-outlined mr-1">info</span> Please
            select an address to continue
          </p>
        )}
      </div>
    </>
  );
};
