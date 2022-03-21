/**
 * Determines whether the specified product with the given product id
 * is present in cart or not.
 *
 * @param  {string} productId
 * @param  {array} cart
 * @returns  {boolean} product in cart or not
 */

export const checkProductInCart = (productId, cart) => {
  return cart.some(({ _id }) => _id === productId);
};
