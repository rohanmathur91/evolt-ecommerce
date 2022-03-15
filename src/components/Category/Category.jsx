import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../staticData";
import "./Category.css";

export const Category = () => {
	return (
		<>
			<div className="text-base font-semibold flex-row content-space-between mx-5 gutter-bottom">
				<div className="category-header font-semibold">Categories</div>
				<Link to={"/products"} className="category-header-btn font-semibold">
					Shop now <i className="fa fa-long-arrow-right ml-1"></i>
				</Link>
			</div>
			<article className="category">
				{categories.map(({ alt, image, category }, index) => (
					<Link key={index} to="/products">
						<div className="category-item flex-column rounded-sm">
							<img className="p-1" src={image} alt={alt} />
							<p className="category-name text-center p-1 rounded-sm font-semibold">
								{category}
							</p>
						</div>
					</Link>
				))}
			</article>
		</>
	);
};
