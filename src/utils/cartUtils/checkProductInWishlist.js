/**
 * Gives boolean value for product in wishlist or not.
 *
 * @param  {string} productId
 * @param  {array} wishlist
 * @returns {boolean} product in wishlist
 */

export const checkProductInWishlist = (productId, wishlist) => {
  return wishlist.some(({ _id }) => _id === productId);
};
