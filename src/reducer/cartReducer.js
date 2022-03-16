export const cartInitialState = {
	wishlist: [],
	cartProducts: [],
	orderSummary: [],
	addressList: [],
	currentAddress: null,
};

export const cartReducer = (cart, { type, payload }) => {
	switch (type) {
		case "ADD_TO_CART":
			return !cart.cartProducts.some(({ id }) => id === payload.id)
				? {
						...cart,
						cartProducts: [{ ...payload, quantity: 1 }, ...cart.cartProducts],
				  }
				: cart;

		case "REMOVE_FROM_CART":
			return {
				...cart,
				cartProducts: cart.cartProducts.filter(({ id }) => id !== payload),
			};

		case "INCREASE_QUANTITY":
			return {
				...cart,
				cartProducts: cart.cartProducts.map((product) =>
					product.id === payload.id
						? { ...product, quantity: payload.quantity + 1 }
						: product
				),
			};

		case "DECREASE_QUANTITY":
			return payload.quantity === 1
				? {
						...cart,
						cartProducts: cart.cartProducts.filter(
							({ id }) => id !== payload.id
						),
				  }
				: {
						...cart,
						cartProducts: cart.cartProducts.map((product) =>
							product.id === payload.id
								? { ...product, quantity: payload.quantity - 1 }
								: product
						),
				  };

		case "ADD_TO_WISHLIST":
			return cart.wishlist.length &&
				cart.wishlist.some(({ id }) => id === payload.id)
				? { ...cart, toastMessage: "Item already present" }
				: {
						...cart,
						wishlist: [payload, ...cart.wishlist],
				  };

		case "REMOVE_FROM_WISHLIST":
			return {
				...cart,
				wishlist: cart.wishlist.filter(({ id }) => id !== payload),
			};

		case "ADD_ADDRESS":
			return {
				...cart,
				addressList: [payload, ...cart.addressList],
			};

		default:
			return cart;
	}
};
