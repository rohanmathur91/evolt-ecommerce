import { createContext, useContext, useReducer } from "react";
import { getTotalCartPrice, getTotalCartDiscount } from "./utils";
import { cartReducer } from "../reducer";

/*
    1. order summary
    2. address management
*/

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [{ wishlist, cartProducts, addressList }, cartDispatch] = useReducer(
		cartReducer,
		{
			wishlist: [],
			cartProducts: [],
			orderSummary: [],
			addressList: [],
			currentAddress: null,
		}
	);

	const productInWishlist = (id) => {
		return wishlist.some(({ id: productId }) => productId === id);
	};

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
				productInWishlist,
				cartDispatch,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
