import React from "react";
import { categories } from "./categories";

export const Home = () => {
	return (
		<div>
			<header className="overflow-hidden gutter-bottom">
				<img className="banner w-100" src="./assests/banner.jpg" alt="banner" />
			</header>

			<section className="gutter-bottom category-container m-auto p-1">
				<div className="text-lg font-semibold flex-row content-space-between mx-2 gutter-bottom">
					<div>Categories</div>
					<a className="text-lg" href="./products/product.html">
						Shop now <i className="fa fa-long-arrow-right ml-1"></i>
					</a>
				</div>
				<article className="category flex-row content-space-between wrap mx-2 gutter-bottom">
					{categories.map(({ alt, image, category }, index) => (
						<a
							href="#"
							key={index}
							className="category-item my-1 rounded-sm overflow-hidden relative"
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

				<article className="arrival-container m-2 flex-row flex-center gutter-bottom">
					<a
						className="w-100 rounded-sm overflow-hidden"
						href="./products/product.html"
					>
						<img
							className="img-transition arrival-img"
							src="./assests/jbl-banner.webp"
							alt="arrival"
						/>
					</a>
					<a
						className="w-100 overflow-hidden rounded-sm"
						href="./products/product.html"
					>
						<img
							className="img-transition arrival-img"
							src="./assests/bose-banner.JPG"
							alt="arrival"
						/>
					</a>
				</article>
			</section>

			<footer className="footer flex-column flex-center p-4">
				<p className="mb-1">Made by Rohan 🛠</p>

				<div>
					<a
						className="text-lg mx-1"
						href="https://github.com/rohanmathur91/evolt-shop"
						target="_blank"
					>
						<i className="fa fa-github social-icons transition-2"></i>
					</a>
					<a
						className="text-lg mx-1"
						href="https://twitter.com/@rohanmathur91"
						target="_blank"
					>
						<i className="fa fa-twitter social-icons transition-2"></i>
					</a>
					<a
						className="text-lg mx-1"
						href="https://www.linkedin.com/in/rohanmathur04/"
						target="_blank"
					>
						<i className="fa fa-linkedin-square social-icons transition-2"></i>
					</a>
				</div>
			</footer>
		</div>
	);
};
