import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducer";

const addToCart = async (product, cartDispatch) => {
  try {
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

    console.log(updatedCart);
  } catch (error) {
    console.log(error);
  }
};

export { addToCart };
