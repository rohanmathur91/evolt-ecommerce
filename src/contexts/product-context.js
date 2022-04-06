import { useEffect, createContext, useContext, useReducer } from "react";
import axios from "axios";
import {
  SET_LOADING,
  SET_CATEGORIES,
  FETCH_PRODUCTS,
  productReducer,
  productInitialState,
} from "../reducer";
import { useToast } from "../hooks";
import {
  getSearchProducts,
  getSortedProducts,
  getFilteredProducts,
} from "../utils";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [
    { isLoading, products, searchQuery, categoryList, productFilter },
    productDispatch,
  ] = useReducer(productReducer, productInitialState);
  const { showToast } = useToast();

  useEffect(() => {
    (async () => {
      try {
        productDispatch({ type: SET_LOADING, payload: true });
        const {
          data: { categories },
        } = await axios.get("/api/categories");

        productDispatch({ type: SET_CATEGORIES, payload: categories });
        productDispatch({ type: SET_LOADING, payload: false });
      } catch (error) {
        showToast("error", "Cannot fetch the categories");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        productDispatch({ type: SET_LOADING, payload: true });
        const {
          data: { products },
        } = await axios.get("/api/products");

        productDispatch({ type: FETCH_PRODUCTS, payload: products });
        productDispatch({ type: SET_LOADING, payload: false });
      } catch (error) {
        showToast("error", "Could not able to retrieve products!");
      }
    })();
  }, []);

  const searchProducts = getSearchProducts(products, searchQuery);
  const filteredProducts = getFilteredProducts(searchProducts, productFilter);
  const sortedProducts = getSortedProducts(filteredProducts, productFilter);

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        categoryList,
        searchQuery,
        productFilter,
        productDispatch,
        sortedProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
