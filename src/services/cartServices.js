import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../reducer";

const addToCart = async (product, cartDispatch, setLoader, showToast) => {
  try {
    setLoader(true);
    const updatedCart = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    cartDispatch({
      type: ADD_TO_CART,
      payload: product,
    });
    showToast("success", `${product.productName} added in cart`);
    setLoader(false);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

const removeFromCart = async (product, cartDispatch, showToast, isMoved) => {
  try {
    const updatedCart = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: { authorization: localStorage.getItem("token") },
    });

    cartDispatch({
      type: REMOVE_FROM_CART,
      payload: product._id,
    });

    !isMoved &&
      showToast("success", `${product.productName} is removed from cart`);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

const updateQuantity = async (
  product,
  updateType,
  cartDispatch,
  setLoader,
  showToast
) => {
  try {
    setLoader(true);
    const updatedCart = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: updateType,
        },
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    cartDispatch({
      type: updateType === "increment" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: product._id,
    });

    showToast("success", `You updated "${product.productName}" quantity.`);
    setLoader(false);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

export { addToCart, removeFromCart, updateQuantity };
