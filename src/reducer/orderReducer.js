import {
  ADD_ORDER,
  UPDATE_ADDRESS,
  REMOVE_ADDRESS,
  SET_SELECTED_ADDRESS,
  UPDATE_COUPON,
} from "./";

export const orderInitialState = {
  coupon: "",
  orders: [],
  addresses: [],
  selectedAddressId: "",
};

export const orderReducer = (orderState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER:
      return { ...orderState, orders: [payload, ...orderState.orders] };

    case UPDATE_COUPON:
      return { ...orderState, coupon: payload };

    case SET_SELECTED_ADDRESS:
      return { ...orderState, selectedAddressId: payload };

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
        selectedAddressId:
          orderState.selectedAddressId !== payload
            ? orderState.selectedAddressId
            : "",
        addresses: orderState.addresses.filter(({ _id }) => _id !== payload),
      };

    default:
      throw new Error("Action type not found.");
  }
};
