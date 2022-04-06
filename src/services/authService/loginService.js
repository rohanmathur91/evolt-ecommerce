import axios from "axios";
import { INITIALIZE_PRODUCTS } from "../../reducer";

export const loginService = async (
  credentials,
  updateUser,
  cartDispatch,
  navigate,
  setError
) => {
  try {
    const {
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", credentials);

    updateUser(foundUser);

    cartDispatch({
      type: INITIALIZE_PRODUCTS,
      payload: {
        cartProducts: foundUser.cart,
        wishlist: foundUser.wishlist,
      },
    });

    localStorage.setItem("token", encodedToken);
    navigate("/");
  } catch (error) {
    setError("Email or password is incorrect");
  }
};
