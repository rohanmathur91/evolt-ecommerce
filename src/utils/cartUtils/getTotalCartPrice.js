/**
 * Gives total cart price
 *
 * @param  {array} cart
 * @returns {number} cart-total
 */
export const getTotalCartPrice = (cart) => {
  return cart.reduce(
    (total, { price, quantity }) => total + Number(price) * quantity,
    0
  );
};
