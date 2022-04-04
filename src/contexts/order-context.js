import { createContext, useContext, useReducer } from "react";
import { orderReducer, orderInitialState } from "../reducer";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [{ orders, addresses, selectedAddressId }, orderDispatch] = useReducer(
    orderReducer,
    orderInitialState
  );

  return (
    <OrderContext.Provider
      value={{ orders, addresses, selectedAddressId, orderDispatch }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
