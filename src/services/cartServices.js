import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../reducer";

const addToCart = async (product, cartDispatch, setIsLoading) => {
  try {
    setIsLoading(true);
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

    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};

const removeFromCart = async (productId, cartDispatch) => {
  try {
    const updatedCart = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });

    cartDispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateQuantity = async (
  productId,
  updateType,
  cartDispatch,
  setIsLoading
) => {
  try {
    setIsLoading(true);
    const updatedCart = await axios.post(
      `/api/user/cart/${productId}`,
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
      payload: productId,
    });

    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export { addToCart, removeFromCart, updateQuantity };
