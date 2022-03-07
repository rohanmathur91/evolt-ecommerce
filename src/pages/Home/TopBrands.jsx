import React from "react";
import { brands } from "./brand";

export const TopBrands = () => {
	return (
		<article>
			<h2 className="text-center mt-3 mb-2">Top Brands</h2>
			<div className="arrival-container w-80 m-auto flex-row wrap flex-center gutter-bottom">
				{brands.map(({ image }) => (
					<img className="w-10" src={image} alt="brand-logo" />
				))}
			</div>
		</article>
	);
};
