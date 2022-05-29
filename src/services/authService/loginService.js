import axios from "axios";
import { INITIALIZE_PRODUCTS } from "../../reducer";

export const loginService = async (
  credentials,
  setUser,
  cartDispatch,
  navigate,
  setError,
  location
) => {
  try {
    const {
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", credentials);

    setUser(foundUser);

    cartDispatch({
      type: INITIALIZE_PRODUCTS,
      payload: {
        cartProducts: foundUser.cart,
        wishlist: foundUser.wishlist,
      },
    });

    const { email, fullName } = foundUser;
    localStorage.setItem("token", encodedToken);
    localStorage.setItem("ecommerce-user", JSON.stringify({ email, fullName }));

    navigate(location.state?.from?.pathname ?? "/", { replace: true });
  } catch (error) {
    setError("Email or password is incorrect");
  }
};
