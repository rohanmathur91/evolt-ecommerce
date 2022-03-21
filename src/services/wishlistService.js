import axios from "axios";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../reducer";

const addToWishlist = async (product, cartDispatch) => {
  try {
    const updatedWishlist = await axios.post("/api/user/wishlist", product, {
      headers: { authorization: localStorage.getItem("token") },
    });

    cartDispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });

    console.log(updatedWishlist);
  } catch (error) {
    console.log(error);
  }
};

const removeFromWishlist = async (productId, cartDispatch) => {
  try {
    const updatedWishlist = await axios.delete(
      `/api/user/wishlist/${productId}`,
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    cartDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: productId,
    });

    console.log(updatedWishlist);
  } catch (error) {
    console.log(error);
  }
};

export { addToWishlist, removeFromWishlist };
