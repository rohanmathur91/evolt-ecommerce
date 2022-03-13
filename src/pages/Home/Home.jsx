import React from "react";
import { useDocumentTitle } from "../../hooks";
import banner from "../../assets/banner.jpg";
import { Category, BrandList, Footer } from "../../components";
import "./Home.css";

export const Home = () => {
	useDocumentTitle("Evolt | Home");

	return (
		<div>
			<header className="overflow-hidden gutter-bottom">
				<img className="banner w-100" src={banner} alt="banner" />
			</header>

			<section className="category-container m-auto p-1 gutter-bottom ">
				<Category />
				<BrandList />
			</section>
			<Footer />
		</div>
	);
};
