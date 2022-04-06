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

    showToast("success", `${product.productName} added in wishlist.`);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

const removeFromWishlist = async (product, cartDispatch, showToast) => {
  try {
    const updatedWishlist = await axios.delete(
      `/api/user/wishlist/${product._id}`,
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    cartDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: product._id,
    });

    showToast("success", `${product.productName} is removed from wishlist.`);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

export { addToWishlist, removeFromWishlist };
