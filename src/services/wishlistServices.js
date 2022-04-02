import axios from "axios";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../reducer";

const addToWishlist = async (product, cartDispatch, showToast) => {
  try {
    const updatedWishlist = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    cartDispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });

    showToast("success", "Added to wishlist");
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};

const removeFromWishlist = async (productId, cartDispatch, showToast) => {
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

    showToast("success", "Removed from wishlist");
  } catch (error) {
    showToast("error", "Something went wrong");
  }
};

export { addToWishlist, removeFromWishlist };
