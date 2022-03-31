import { createFilterObject } from "../utils";
import { brands, types } from "../staticData/data";
import {
  SORT,
  SEARCH,
  CLEAR_FILTER,
  FETCH_PRODUCTS,
  FILTER_BY_PRICE,
  FILTER_BY_BRAND,
  FILTER_BY_TYPE,
  FILTER_BY_IN_STOCK_ONLY,
} from "./index";

export const productInitialState = {
  products: [],
  searchQuery: "",
  productFilter: {
    sortBy: "",
    price: 5000,
    inStockOnly: false,
    types: createFilterObject(types),
    brands: createFilterObject(brands),
  },
  toast: {
    type: "",
    message: "",
    showToast: false,
  },
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, products: payload };

    case SORT:
      return {
        ...state,
        productFilter: { ...state.productFilter, sortBy: payload },
      };

    case SEARCH:
      return { ...state, searchQuery: payload };

    case FILTER_BY_PRICE:
      return {
        ...state,
        productFilter: {
          ...state.productFilter,
          price: payload,
        },
      };

    case FILTER_BY_BRAND:
      return {
        ...state,
        productFilter: {
          ...state.productFilter,
          brands: {
            ...state.productFilter.brands,
            [payload]: !state.productFilter.brands[payload],
          },
        },
      };

    case FILTER_BY_TYPE:
      return {
        ...state,
        productFilter: {
          ...state.productFilter,
          types: {
            ...state.productFilter.types,
            [payload]: !state.productFilter.types[payload],
          },
        },
      };
    case FILTER_BY_IN_STOCK_ONLY:
      return {
        ...state,
        productFilter: {
          ...state.productFilter,
          inStockOnly: !state.productFilter.inStockOnly,
        },
      };

    case CLEAR_FILTER:
      return {
        ...state,
        productFilter: {
          price: 5000,
          sortBy: "",
          inStockOnly: false,
          types: {
            wired: false,
            wireless: false,
            speaker: false,
            noise_cancelling: false,
          },
          brands: {
            bose: false,
            boat: false,
            marshall: false,
            sony: false,
            jbl: false,
          },
        },
      };

    default:
      return state;
  }
};
