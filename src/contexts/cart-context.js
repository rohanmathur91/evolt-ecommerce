import { createContext, useContext, useEffect, useReducer } from "react";
import {
  getTotalCartPrice,
  getTotalCartDiscount,
  checkProductInWishlist,
} from "../utils";
import {
  cartReducer,
  cartInitialState,
  CLEAR_CART_AND_WISHLIST,
} from "../reducer";
import { useAuth } from "./auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [{ wishlist, cartProducts }, cartDispatch] = useReducer(
    cartReducer,
    cartInitialState
  );

  useEffect(() => {
    if (!user) {
      cartDispatch({ type: CLEAR_CART_AND_WISHLIST });
    }
  }, [user]);

  const subTotal = getTotalCartPrice(cartProducts);
  const totalDiscount = getTotalCartDiscount(cartProducts, subTotal);
  const totalAmount = (subTotal - totalDiscount).toFixed(2);
  const totalSave = (subTotal - totalAmount).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        wishlist,
        subTotal,
        totalAmount,
        totalDiscount,
        totalSave,
        cartProducts,
        checkProductInWishlist,
        cartDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
