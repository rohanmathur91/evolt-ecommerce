/**
 * Calculates total discount of whole cart if cart exist else 500 will be
 * default discount.
 *
 * @param  {array} cart
 * @param  {number} totalPrice
 * @returns {number} discount
 */
export const getTotalCartDiscount = (cart, totalPrice) => {
  return cart.length > 0
    ? (cart.reduce((total, { discount }) => total + discount, 0) /
        cart.length /
        100) *
        totalPrice
    : 500;
};
