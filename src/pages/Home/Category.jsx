import React from "react";
import { categories } from "./categories";

export const Category = () => {
	return (
		<article className="category">
			{categories.map(({ alt, image, category }, index) => (
				<a
					href="#"
					key={index}
					className="category-item rounded-sm overflow-hidden relative"
				>
					<img className="p-1 relative" src={image} alt={alt} />
					<div className="text-overlay flex-row flex-center">
						<p className="overlay-content p-1 rounded-sm font-semibold">
							{category}
						</p>
					</div>
				</a>
			))}
		</article>
	);
};
