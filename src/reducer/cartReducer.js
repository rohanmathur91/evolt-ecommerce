import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREASE_QUANTITY,
	DECREASE_QUANTITY,
	ADD_TO_WISHLIST,
	REMOVE_FROM_WISHLIST,
	ADD_ADDRESS,
	UPDATE_USER_CART,
	UPDATE_USER_WISHLIST,
} from "./index";

export const cartInitialState = {
	wishlist: [],
	cartProducts: [],
	orderSummary: [],
	addressList: [],
	currentAddress: null,
};

export const cartReducer = (cart, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			return !cart.cartProducts.some(({ _id }) => _id === payload._id)
				? {
						...cart,
						cartProducts: [{ ...payload, quantity: 1 }, ...cart.cartProducts],
				  }
				: cart;

		case REMOVE_FROM_CART:
			return {
				...cart,
				cartProducts: cart.cartProducts.filter(({ _id }) => _id !== payload),
			};

		case INCREASE_QUANTITY:
			return {
				...cart,
				cartProducts: cart.cartProducts.map((product) =>
					product._id === payload
						? { ...product, quantity: product.quantity + 1 }
						: product
				),
			};

		case DECREASE_QUANTITY:
			return {
				...cart,
				cartProducts: cart.cartProducts.map((product) =>
					product._id === payload
						? { ...product, quantity: product.quantity - 1 }
						: product
				),
			};

		case ADD_TO_WISHLIST:
			return cart.wishlist.length &&
				cart.wishlist.some(({ _id }) => _id === payload._id)
				? { ...cart, toastMessage: "Item already present" }
				: {
						...cart,
						wishlist: [payload, ...cart.wishlist],
				  };

		case REMOVE_FROM_WISHLIST:
			return {
				...cart,
				wishlist: cart.wishlist.filter(({ _id }) => _id !== payload),
			};

		case ADD_ADDRESS:
			return {
				...cart,
				addressList: [payload, ...cart.addressList],
			};

		case UPDATE_USER_CART:
			return { ...cart, cartProducts: payload };

		case UPDATE_USER_WISHLIST:
			return { ...cart, wishlist: payload };

		default:
			return cart;
	}
};
