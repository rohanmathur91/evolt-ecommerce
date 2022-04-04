import axios from "axios";
import {
  CLEAR_SIGNUP_FORM,
  INITIALIZE_PRODUCTS,
  SET_SIGNUP_FORM_ERROR,
} from "../../reducer";

export const signupService = async (
  credentials,
  updateUser,
  cartDispatch,
  errorDispatch,
  navigate
) => {
  try {
    const {
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", credentials);

    updateUser(createdUser);
    cartDispatch({
      type: INITIALIZE_PRODUCTS,
      payload: {
        cartProducts: createdUser.cart,
        wishlist: createdUser.wishlist,
      },
    });

    localStorage.setItem("token", encodedToken);
    errorDispatch({ type: CLEAR_SIGNUP_FORM });
    navigate("/");
  } catch (error) {
    errorDispatch({
      type: SET_SIGNUP_FORM_ERROR,
      payload:
        error.response.status === 422
          ? "Email already exist."
          : "Something is wrong, please try later.",
    });
  }
};
