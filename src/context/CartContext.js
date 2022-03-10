import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer";
/*
    1. cart
    2. wishlist
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

	return (
		<CartContext.Provider
			value={{ wishlist, cartProducts, productInWishlist, cartDispatch }}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
