/**
 * Determines whether the specified product with the given product id
 * is present in wishlist or not.
 *
 * @param  {string} productId
 * @param  {array} wishlist
 * @returns {boolean} product in wishlist
 */

export const checkProductInWishlist = (productId, wishlist) => {
  return wishlist.some(({ _id }) => _id === productId);
};
