import { cartReducer, cartInitialState } from "../../reducer/cartReducer";
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  INITIALIZE_CART,
  INITIALIZE_PRODUCTS,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "../../reducer/constants/cartActionTypes";

describe("cart reducer", () => {
  it("should initialize products in cart for the first time", () => {
    // arrange
    const cart = {
      wishlist: [],
      cartProducts: [],
    };

    const action = {
      type: INITIALIZE_PRODUCTS,
      payload: {
        wishlist: [],
        cartProducts: [],
      },
    };

    // act
    const updatedCart = cartReducer(cartInitialState, action);

    // assert
    expect(cart).toEqual(updatedCart);
  });

  it("should initialize cart after login", () => {
    // arrange
    const cart = {
      ...cartInitialState,
      cartProducts: [
        {
          _id: 1,
          brand: "boat",
          productName: "boAt Bassheads 242",
          price: "1800.00",
        },
      ],
    };

    const action = {
      type: INITIALIZE_CART,
      payload: [
        {
          _id: 1,
          brand: "boat",
          productName: "boAt Bassheads 242",
          price: "1800.00",
        },
      ],
    };

    // act
    const updatedCart = cartReducer(cartInitialState, action);

    // assert
    expect(cart).toEqual(updatedCart);
  });

  it("should add a product into a cart", () => {
    // arange
    const product = {
      _id: 1,
      brand: "boat",
      productName: "boAt Bassheads 242",
      price: "1800.00",
      qty: 1,
    };

    const cartAfterUpdation = {
      ...cartInitialState,
      cartProducts: [product],
    };

    // act
    const action = {
      type: ADD_TO_CART,
      payload: product,
    };

    const updatedCart = cartReducer(cartInitialState, action);

    // assert
    expect(updatedCart).toEqual(cartAfterUpdation);
  });

  it("should remove a product from cart", () => {
    const cartState = {
      ...cartInitialState,
      cartProducts: [
        {
          _id: 1,
          brand: "boat",
          productName: "boAt Bassheads 242",
          price: "1800.00",
          qty: 1,
        },
      ],
    };

    const action = {
      type: REMOVE_FROM_CART,
      payload: 1,
    };

    const upatedCart = cartReducer(cartState, action);

    expect(upatedCart).toEqual(cartInitialState);
  });

  it("should increase quantity of a product", () => {
    const cartState = {
      ...cartInitialState,
      cartProducts: [
        {
          _id: 1,
          brand: "boat",
          productName: "boAt Bassheads 242",
          price: "1800.00",
          qty: 1,
        },
      ],
    };

    const cartAfterUpdation = {
      ...cartInitialState,
      cartProducts: [
        {
          _id: 1,
          brand: "boat",
          productName: "boAt Bassheads 242",
          price: "1800.00",
          qty: 2,
        },
      ],
    };

    const action = {
      type: INCREASE_QUANTITY,
      payload: 1,
    };

    const updatedCart = cartReducer(cartState, action);

    expect(updatedCart).toEqual(cartAfterUpdation);
  });

  it("should decrease quantity of a product", () => {
    const cartState = {
      ...cartInitialState,
      cartProducts: [
        {
          _id: 1,
          brand: "boat",
          productName: "boAt Bassheads 242",
          price: "1800.00",
          qty: 5,
        },
      ],
    };

    const cartAfterUpdation = {
      ...cartInitialState,
      cartProducts: [
        {
          _id: 1,
          brand: "boat",
          productName: "boAt Bassheads 242",
          price: "1800.00",
          qty: 4,
        },
      ],
    };

    const action = {
      type: DECREASE_QUANTITY,
      payload: 1,
    };

    const updatedCart = cartReducer(cartState, action);

    expect(updatedCart).toEqual(cartAfterUpdation);
  });

  it("should add a product in wishlist", () => {
    const product = {
      _id: 1,
      brand: "boat",
      productName: "boAt Bassheads 242",
      price: "1800.00",
      qty: 5,
    };

    const cartAfterUpdation = {
      ...cartInitialState,
      wishlist: [product],
    };

    const action = {
      type: ADD_TO_WISHLIST,
      payload: product,
    };

    const updatedCart = cartReducer(cartInitialState, action);

    expect(updatedCart).toEqual(cartAfterUpdation);
  });

  it("should check if product exist in wishlist and dont update it", () => {
    const product = {
      _id: 1,
      brand: "boat",
      productName: "boAt Bassheads 242",
      price: "1800.00",
      qty: 5,
    };

    const cartState = {
      ...cartInitialState,
      wishlist: [product],
    };

    const action = {
      type: ADD_TO_WISHLIST,
      payload: product,
    };

    const updatedCart = cartReducer(cartState, action);

    expect(updatedCart).toEqual(cartState);
  });

  it("should remove a product from wishlist", () => {
    const cartState = {
      ...cartInitialState,
      wishlist: [
        {
          _id: 1,
          brand: "boat",
          productName: "boAt Bassheads 242",
          price: "1800.00",
          qty: 5,
        },
      ],
    };

    const action = {
      type: REMOVE_FROM_WISHLIST,
      payload: 1,
    };

    const updatedCart = cartReducer(cartState, action);

    expect(updatedCart).toEqual(cartInitialState);
  });
});
