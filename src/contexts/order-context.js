import { createContext, useContext, useReducer } from "react";
import { orderReducer, orderInitialState } from "../reducer";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [{ orders, addresses, currentAddress }, orderDispatch] = useReducer(
    orderReducer,
    orderInitialState
  );

  return (
    <OrderContext.Provider value={{ addresses, currentAddress, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
