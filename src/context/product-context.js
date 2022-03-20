import { createContext, useContext, useReducer } from "react";
import { productReducer, productInitialState } from "../reducer";
import {
  getSearchProducts,
  getSortedProducts,
  getFilteredProducts,
} from "../utils";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [{ products, searchQuery, toast, productFilter }, productDispatch] =
    useReducer(productReducer, productInitialState);

  const searchProducts = getSearchProducts(products, searchQuery);
  const filteredProducts = getFilteredProducts(searchProducts, productFilter);
  const sortedProducts = getSortedProducts(filteredProducts, productFilter);

  return (
    <ProductContext.Provider
      value={{
        toast,
        products,
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
