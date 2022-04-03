import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  INITIALIZE_CART,
  INITIALIZE_WISHLIST,
  CLEAR_CART_AND_WISHLIST,
} from "./index";

export const cartInitialState = {
  wishlist: [],
  cartProducts: [],
};

export const cartReducer = (cartState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...cartState,
        cartProducts: [{ ...payload, qty: 1 }, ...cartState.cartProducts],
      };

    case REMOVE_FROM_CART:
      return {
        ...cartState,
        cartProducts: cartState.cartProducts.filter(
          ({ _id }) => _id !== payload
        ),
      };

    case INCREASE_QUANTITY:
      return {
        ...cartState,
        cartProducts: cartState.cartProducts.map((product) =>
          product._id === payload
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...cartState,
        cartProducts: cartState.cartProducts.map((product) =>
          product._id === payload
            ? { ...product, qty: product.qty - 1 }
            : product
        ),
      };

    case ADD_TO_WISHLIST:
      return !cartState.wishlist.some(({ _id }) => _id === payload._id)
        ? {
            ...cartState,
            wishlist: [payload, ...cartState.wishlist],
          }
        : cartState;

    case REMOVE_FROM_WISHLIST:
      return {
        ...cartState,
        wishlist: cartState.wishlist.filter(({ _id }) => _id !== payload),
      };

    case INITIALIZE_CART:
      return { ...cartState, cartProducts: payload.reverse() };

    case INITIALIZE_WISHLIST:
      return { ...cartState, wishlist: payload.reverse() };

    case CLEAR_CART_AND_WISHLIST:
      return {
        ...cartState,
        wishlist: [],
        cartProducts: [],
        orderSummary: [],
      };

    default:
      throw new Error("Action type not found.");
  }
};
