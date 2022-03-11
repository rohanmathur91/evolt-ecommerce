import { createContext, useContext, useReducer } from "react";
import { getTotalCartPrice, getTotalCartDiscount } from "./utilities";
import { cartReducer } from "../reducer";

/*
    3. order summary
    4. address management
*/

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [{ cartProducts, wishlist, newAddress }, cartDispatch] = useReducer(
		cartReducer,
		{
			wishlist: [],
			cartProducts: [],
			orderSummary: [],
			addressList: [],
			toastMessage: "",
			currentSelect: "",
			newAddress: {
				name: "",
				area: "",
				city: "",
				home: "",
				contact: "",
				country: "India",
				pinCode: "",
				addressType: "home",
			},
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
				totalDiscount,
				totalAmount,
				totalSave,
				cartProducts,
				newAddress,
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
