import { createContext, useContext, useReducer } from "react";
import {
	getTotalCartPrice,
	getTotalCartDiscount,
	checkProductInWishlist,
} from "../utils";
import { cartReducer, cartInitialState } from "../reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [{ wishlist, cartProducts, addressList }, cartDispatch] = useReducer(
		cartReducer,
		cartInitialState
	);

	const totalPrice = getTotalCartPrice(cartProducts);
	const totalDiscount = getTotalCartDiscount(cartProducts, totalPrice);
	const totalAmount = (totalPrice - totalDiscount).toFixed(2);
	const totalSave = (totalPrice - totalAmount).toFixed(2);

	return (
		<CartContext.Provider
			value={{
				wishlist,
				totalPrice,
				totalAmount,
				totalDiscount,
				totalSave,
				cartProducts,
				addressList,
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
