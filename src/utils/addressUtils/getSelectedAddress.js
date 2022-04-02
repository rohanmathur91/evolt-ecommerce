export const getSelectedAddress = (addresses, selectedAddressId) => {
  return addresses.find(({ _id }) => _id === selectedAddressId);
};
