import { cartReducer, cartInitialState } from "../cartReducer";
import {
  INITIALIZE_CART,
  INITIALIZE_PRODUCTS,
} from "../constants/cartActionTypes";

describe("cart reducer", () => {
  const products = [
    {
      _id: 1,
      brand: "boat",
      productName: "boAt Bassheads 242",
      price: "1800.00",
    },
    {
      _id: 2,
      brand: "marshall",
      productName: "Marshall Stockwell",
      price: "4750.00",
    },
  ];

  test("should initialize products in cart for the first time", () => {
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

  test("should initialize cart", () => {
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
});
