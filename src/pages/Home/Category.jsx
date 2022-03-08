import React from "react";
import { categories } from "./categories";

export const Category = () => {
	return (
		<>
			<div className="category-header text-base font-semibold flex-row content-space-between mx-2 gutter-bottom">
				<div>Categories</div>
				<button className="category-header-btn font-semibold">
					Shop now <i className="fa fa-long-arrow-right ml-1"></i>
				</button>
			</div>
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
		</>
	);
};
