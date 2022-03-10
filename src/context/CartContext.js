import { createContext, useContext, useReducer } from "react";
import { getTotalCartPrice, getTotalCartDiscount } from "./utilities";
import { cartReducer } from "../reducer";

/*
    3. order summary
    4. address management
*/

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [{ cartProducts, wishlist }, cartDispatch] = useReducer(cartReducer, {
		wishlist: [],
		cartProducts: [],
		orderSummary: [],
		addressManagement: [],
		toastMessage: "",
	});

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
				totalDiscount,
				totalAmount,
				totalSave,
				cartProducts,
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
