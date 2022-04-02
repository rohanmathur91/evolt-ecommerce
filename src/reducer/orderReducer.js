import { ADD_ORDER, SET_ADDRESS, UPDATE_ADDRESS, REMOVE_ADDRESS } from "./";

export const orderInitialState = {
  orders: [],
  addresses: [],
  currentAddress: "",
};

export const orderReducer = (orderState, { type, payload }) => {
  switch (type) {
    case SET_ADDRESS:
      return { ...orderState, currentAddress: payload };

    case UPDATE_ADDRESS:
      return payload?.isEdit
        ? {
            ...orderState,
            addresses: orderState.addresses.map((address) =>
              address._id === payload.address._id
                ? { ...address, ...payload.address }
                : address
            ),
          }
        : {
            ...orderState,
            addresses: [payload, ...orderState.addresses],
          };

    case REMOVE_ADDRESS:
      return {
        ...orderState,
        addresses: orderState.addresses.filter(({ _id }) => _id !== payload),
      };

    case ADD_ORDER:
      return { ...orderState, orders: [payload, ...orderState.orders] };

    default:
      throw new Error("Action type not found.");
  }
};
