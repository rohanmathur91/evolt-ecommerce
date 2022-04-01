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

export const productReducer = (productState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...productState, products: payload };

    case SORT:
      return {
        ...productState,
        productFilter: { ...productState.productFilter, sortBy: payload },
      };

    case SEARCH:
      return { ...productState, searchQuery: payload };

    case FILTER_BY_PRICE:
      return {
        ...productState,
        productFilter: {
          ...productState.productFilter,
          price: payload,
        },
      };

    case FILTER_BY_BRAND:
      return {
        ...productState,
        productFilter: {
          ...productState.productFilter,
          brands: {
            ...productState.productFilter.brands,
            [payload]: !productState.productFilter.brands[payload],
          },
        },
      };

    case FILTER_BY_TYPE:
      return {
        ...productState,
        productFilter: {
          ...productState.productFilter,
          types: {
            ...productState.productFilter.types,
            [payload]: !productState.productFilter.types[payload],
          },
        },
      };
    case FILTER_BY_IN_STOCK_ONLY:
      return {
        ...productState,
        productFilter: {
          ...productState.productFilter,
          inStockOnly: !productState.productFilter.inStockOnly,
        },
      };

    case CLEAR_FILTER:
      return {
        ...productState,
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
      throw new Error("Action type not found.");
  }
};
