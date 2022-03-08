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
				<Category />
				<TopBrands />
			</section>
		</div>
	);
};
