/*
    1. cart
    2. wishlist
    3. order summary
    4. address management
*/

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (cart, { type, payload }) => {
	switch (type) {
		case "ADD_TO_WISHLIST":
			return cart.wishlist.some(({ id }) => id === payload.id)
				? { ...cart, toastMessage: "Item already present" }
				: { ...cart, wishlist: [payload, ...cart.wishlist] };

		default:
			return cart;
	}
};

const CartProvider = ({ children }) => {
	const [{ cartProducts, wishlist }, cartDispatch] = useReducer(cartReducer, {
		wishlist: [],
		cartProducts: [],
		orderSummary: [],
		addressManagement: [],
		toastMessage: "",
	});

	return (
		<CartProvider value={{ cartProducts, wishlist }}>{children}</CartProvider>
	);
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
