import { createContext, useContext, useReducer } from "react";
import {
  getTotalCartPrice,
  getTotalCartDiscount,
  checkProductInWishlist,
} from "../utils";
import { cartReducer, cartInitialState } from "../reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [{ wishlist, cartProducts }, cartDispatch] = useReducer(
    cartReducer,
    cartInitialState
  );

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
