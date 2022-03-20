/**
 * creates an object for filtering brands and types each element in the
 * object is itself is an object with [key] and boolean as a value
 *
 * @param  {array} array
 * @returns {object} filter object of boolean value
 */
export const createFilterObject = (array) => {
  return array.reduce(
    (initialObject, key) => ({ ...initialObject, [key]: false }),
    {}
  );
};
