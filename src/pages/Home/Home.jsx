import React from "react";
import banner from "../../assests/banner.jpg";
import { Category } from "./Category";
import { TopBrands } from "./TopBrands";
import "./style.css";

export const Home = () => {
	return (
		<div>
			<header className="overflow-hidden gutter-bottom">
				<img className="banner w-100" src={banner} alt="banner" />
			</header>

			<section className="category-container m-auto p-1 gutter-bottom ">
				<div className="category-header text-base font-semibold flex-row content-space-between mx-2 gutter-bottom">
					<div>Categories</div>
					<button className="category-header-btn font-semibold">
						Shop now <i className="fa fa-long-arrow-right ml-1"></i>
					</button>
				</div>

				<Category />
				<TopBrands />
			</section>
		</div>
	);
};
