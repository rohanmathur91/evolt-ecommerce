import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart, useOrder } from "../../contexts";
import { INITIALIZE_CART } from "../../reducer";
import {
  useModal,
  useToast,
  useScrollToTop,
  useDocumentTitle,
} from "../../hooks";
import { getSelectedAddress } from "../../utils";
import {
  CartDetails,
  AddressForm,
  ModalContainer,
  ProductHorizontalCard,
} from "../../components";
import "./Cart.css";

export const Cart = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { showModal, handleShowModal } = useModal();
  const { addresses, selectedAddressId } = useOrder();
  const { cartProducts, cartDispatch } = useCart();
  const selectedAddress = getSelectedAddress(addresses, selectedAddressId);

  useScrollToTop();
  useDocumentTitle("Cart");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { cart },
        } = await axios.get("/api/user/cart", {
          headers: { authorization: localStorage.getItem("token") },
        });

        cartDispatch({
          type: INITIALIZE_CART,
          payload: cart,
        });
        setLoader(false);
      } catch (error) {
        showToast("error", "Something went wrong!");
      }
    })();
  }, []);

  const handleAddressEdit = () => {
    if (!selectedAddressId) {
      navigate("/profile/addresses");
    } else {
      handleShowModal(true);
    }
  };

  return loader ? (
    <h4 className="text-center mt-6 p-1">Loading cart...</h4>
  ) : (
    <>
      {showModal && (
        <ModalContainer handleShowModal={handleShowModal}>
          <AddressForm
            editAddress={selectedAddress}
            handleShowModal={handleShowModal}
          />
        </ModalContainer>
      )}
      <div>
        {cartProducts.length > 0 ? (
          <h3 className="mt-6 text-center">
            Shopping Cart ({cartProducts.length})
          </h3>
        ) : (
          ""
        )}

        {cartProducts.length ? (
          <div className="cart-container flex-row wrap content-center">
            <div className="cart-products mt-2">
              <div className="flex-row content-space-between py-2 px-2 m-2 border rounded-sm">
                <Link title="Choose address" to="/profile/addresses">
                  <p className="font-semibold flex-row items-center">
                    {selectedAddressId
                      ? "Change delivery address"
                      : "Select Address"}
                    <span className="material-icons-outlined arrow-icon">
                      keyboard_arrow_right
                    </span>
                  </p>
                  {selectedAddress ? (
                    <p className="delivery-address text-sm">
                      {`${selectedAddress.fullName}, ${selectedAddress.home}, ${selectedAddress.area}`}
                    </p>
                  ) : (
                    <p className="text-sm">
                      Please select an address for delivery
                    </p>
                  )}
                </Link>
                <button
                  onClick={handleAddressEdit}
                  className="btn-solid address-edit-btn rounded-sm ml-2 p-1 text-sm icon"
                >
                  <span className="material-icons-outlined edit-icon mr-1">
                    edit
                  </span>
                  Edit
                </button>
              </div>

              {cartProducts.map((product) => (
                <ProductHorizontalCard key={product._id} product={product} />
              ))}
            </div>
            <CartDetails />
          </div>
        ) : (
          <div className="not-available text-center px-1">
            <p className="text-lg font-semibold mb-1">Your cart is empty.</p>
            <p>
              Check your wishlist for favourite items or{" "}
              <Link to="/products" className="continue">
                continue shopping
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </>
  );
};
