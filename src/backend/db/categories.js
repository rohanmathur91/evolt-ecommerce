import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		alt: "product",
		category: "Sports",
		image: "https://m.media-amazon.com/images/I/61sILScAOQL._SX569_.jpg",
	},
	{
		_id: uuid(),
		alt: "product",
		category: "Noise Cancelling",
		image: "https://m.media-amazon.com/images/I/71j1dzyRQPS._SL1500_.jpg",
	},
	{
		_id: uuid(),
		alt: "product",
		category: "Wireless",
		image: "https://m.media-amazon.com/images/I/51wnOfRKl6L._SL1500_.jpg",
	},
	{
		_id: uuid(),
		alt: "product",
		category: "Speaker",
		image: "https://m.media-amazon.com/images/I/71lUJaQcyWL._AC_UY218_.jpg",
	},
];
