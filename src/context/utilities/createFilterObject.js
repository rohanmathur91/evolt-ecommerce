// creates an object for filtering brands ansd types
// each element in the object is itself is an object with [key] and boolean as a value
export const createFilterObject = (array) => {
	return array.reduce((acc, key) => ({ ...acc, [key]: false }), {});
};
