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

	const totalPrice = cartProducts.reduce(
		(total, { price }) => total + Number(price),
		0
	);

	const totalDiscount =
		cartProducts.length > 0
			? (cartProducts.reduce((total, { discount }) => total + discount, 0) /
					cartProducts.length /
					100) *
			  totalPrice
			: 500;

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
