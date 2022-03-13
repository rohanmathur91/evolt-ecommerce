import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../staticData";
import "./Category.css";

export const Category = () => {
	return (
		<>
			<div className="category-header text-base font-semibold flex-row content-space-between mx-5 gutter-bottom">
				<div>Categories</div>
				<Link to={"/products"} className="category-header-btn font-semibold">
					Shop now <i className="fa fa-long-arrow-right ml-1"></i>
				</Link>
			</div>
			<article className="category">
				{categories.map(({ alt, image, category }, index) => (
					<Link
						key={index}
						to="/products"
						className="category-item rounded-sm overflow-hidden relative"
					>
						<img className="p-1 relative" src={image} alt={alt} />
						<div className="text-overlay flex-row flex-center">
							<p className="overlay-content p-1 rounded-sm font-semibold">
								{category}
							</p>
						</div>
					</Link>
				))}
			</article>
		</>
	);
};
