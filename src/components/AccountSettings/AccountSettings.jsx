import React from "react";
import { useNavigate } from "react-router-dom";
import { CLEAR_CART_AND_WISHLIST } from "../../reducer";
import { useAuth, useCart } from "../../contexts";

export const AccountSettings = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const { cartDispatch } = useCart();

  const handleLogout = () => {
    updateUser(null);
    localStorage.removeItem("token");
    cartDispatch({ type: CLEAR_CART_AND_WISHLIST });
    navigate("/");
  };

  return (
    <>
      <h4>Account settings</h4>
      <button
        onClick={handleLogout}
        className="btn mt-2 btn-solid p-1 font-semibold transition-2 rounded-sm"
      >
        Logout
      </button>
    </>
  );
};
