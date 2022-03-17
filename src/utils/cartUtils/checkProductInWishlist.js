/**
 * Gives boolean value for product in wishlist or not.
 * @param  {string} productId
 * @param  {array} wishlist
 * @returns {boolean} product in wishlist
 */
export const checkProductInWishlist = (id, wishlist) => {
	return wishlist.some(({ id: productId }) => productId === id);
};
