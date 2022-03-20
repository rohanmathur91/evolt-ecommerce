/**
 * Gives sorted array of products based on the filter applied
 *
 * @param  {array} products
 * @param  {object} filter object
 * @returns {array} sorted array
 */
export const getSortedProducts = (products, { sortBy }) => {
  switch (sortBy) {
    case "SORT_BY_LATEST":
      return [...products].sort((a, b) => b.addedInYear - a.addedInYear);

    case "SORT_BY_LOW_TO_HIGH":
      return [...products].sort((a, b) => a.price - b.price);

    case "SORT_BY_HIGH_TO_LOW":
      return [...products].sort((a, b) => b.price - a.price);

    default:
      return products;
  }
};
