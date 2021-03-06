/**
 * Calculates total cart price.
 *
 * @param  {array} cart
 * @returns {number} cart-total
 */

export const getTotalCartPrice = (cart) => {
  return cart.reduce((total, { price, qty }) => total + Number(price) * qty, 0);
};
