import React from "react";
import banner from "../../assests/banner.jpg";
import { Category } from "./Category";
import { TopBrands } from "./TopBrands";

export const Home = () => {
	return (
		<div>
			<header className="overflow-hidden gutter-bottom">
				<img className="banner w-100" src={banner} alt="banner" />
			</header>

			<section className="gutter-bottom category-container m-auto p-1">
				<div className="text-lg font-semibold flex-row content-space-between mx-2 gutter-bottom">
					<div>Categories</div>
					<a className="text-lg" href="./products/product.html">
						Shop now <i className="fa fa-long-arrow-right ml-1"></i>
					</a>
				</div>

				<Category />

				<TopBrands />
			</section>
		</div>
	);
};
