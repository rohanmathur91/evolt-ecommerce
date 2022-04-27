import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOrder, useCart, useAuth } from "../../contexts";
import { SAVE_ORDER, UPDATE_COUPON, INITIALIZE_CART } from "../../reducer";
import { useToast, useScrollToTop, useDocumentTitle } from "../../hooks";
import {
  getDate,
  getSelectedAddress,
  getTotalAmountWithCoupon,
} from "../../utils";
import { v4 as uuid } from "uuid";
import logo from "../../assets/logo.svg";
import "./Checkout.css";

export const Checkout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { coupon, addresses, selectedAddressId, orderDispatch } = useOrder();
  const selectedAddress = getSelectedAddress(addresses, selectedAddressId);
  const { area, country, cityAndState, fullName, home, mobileNumber, pinCode } =
    selectedAddress ?? {};
  const { cartProducts, subTotal, totalDiscount, totalAmount, cartDispatch } =
    useCart();
  const totalAmountWithCoupon = getTotalAmountWithCoupon(coupon, totalAmount);

  useScrollToTop();
  useDocumentTitle("Checkout");

  const handleRemoveCoupon = () => {
    orderDispatch({ type: UPDATE_COUPON, payload: "" });
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
    });
  };

  const displayRazorpay = async () => {
    const respose = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!respose) {
      showToast("error", "Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: "rzp_test_Q4WcLMWlIe6qSa",
      amount: totalAmountWithCoupon * 100,
      currency: "INR",
      name: "Evolt Ecommerce",
      description: "Enjoy the products & thanks for shopping with us.",
      image: logo,

      handler: ({ razorpay_payment_id }) => {
        // save order
        orderDispatch({
          type: SAVE_ORDER,
          payload: {
            orderId: uuid(),
            paymentId: razorpay_payment_id,
            date: getDate(),
            coupon,
            subTotal,
            totalAmount,
            totalDiscount,
            totalAmountWithCoupon,
            address: selectedAddress,
            products: [...cartProducts],
          },
        });

        // empty cart
        cartDispatch({ type: INITIALIZE_CART, payload: [] });
        navigate("/profile/orders");
      },
      prefill: {
        name: user.fullName,
        email: user.email,
        contact: "9988776655",
      },
      theme: {
        color: "#302f34",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", () => {
      showToast("error", "Payment failed, please try again.");
    });
  };

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
      <h3 className="mt-6 text-center">Order Details</h3>
      <div className="order-summary my-4 flex-column flex-center px-2">
        {cartProducts.map(
          ({ _id, image, alt, description, productName, qty, price }) => (
            <Link
              key={_id}
              title={productName}
              to={`/product/${_id}`}
              className="product-row flex-row w-100 py-2"
            >
              <img
                src={image}
                alt={alt}
                className="w-10 h-10 rounded-sm mr-4 order-product-image"
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
            <span>₹{subTotal}</span>
          </div>

          <div className="flex-row content-space-between my-1">
            <span>Product Discount</span>
            <span>- ₹{totalDiscount.toFixed(2)}</span>
          </div>

          <div className="flex-row content-space-between my-1">
            <span>Delivery Charges</span>
            <span className="text-green font-semibold">Free</span>
          </div>

          <div className="flex-row items-center font-semibold my-1">
            <span>Total Amount</span>
            {coupon && (
              <div className="coupon-chip ml-1 rounded-full icon">
                {coupon}
                <button
                  className="icon"
                  title="Remove coupon"
                  onClick={handleRemoveCoupon}
                >
                  <span className="material-icons-outlined ml-1">close</span>
                </button>
              </div>
            )}
            <span className="ml-auto">₹{totalAmountWithCoupon}</span>
          </div>
          <button
            onClick={displayRazorpay}
            className="btn btn-solid w-100 font-semibold transition-2 p-1 mt-1"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
