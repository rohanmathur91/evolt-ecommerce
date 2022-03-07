import React from "react";

export const Navbar = () => {
	return (
		<nav className="navigation flex-row items-center content-space-between w-100 sticky top-0 left-0 z-3">
			<div className="flex-row items-center">
				<div className="menu hide mr-1 p-1">
					<div className="hamburger hamburger-line1"></div>
					<div className="hamburger hamburger-line2"></div>
					<div className="hamburger hamburger-line3"></div>
				</div>

				<a href="./index.html">
					<h3 className="brand-logo font-black">EVOLT</h3>
				</a>

				<div className="navbar-left-menu ml-4">
					<a className="navbar-cta mr-1 rounded-sm p-1" href="./index.html">
						Home
					</a>
					<a
						className="navbar-cta rounded-sm p-1"
						href="./products/product.html"
					>
						Shop now
					</a>
				</div>
			</div>

			<span className="search flex-row items-center border rounded-sm">
				<button className="search-btn">
					<i className=" fa fa-search search-icon ml-2"></i>
				</button>
				<input
					className="search-input w-100 py-1 px-2 text-base rounded-sm"
					id="search"
					type="search"
					placeholder="search..."
				/>
			</span>

			<ul className="navbar-options flex-row flex-center">
				<li>
					<a className="flex-column items-center" href="./auth/login.html">
						<i className="fa fa-user icon-stroke badge-icon"></i>
						<span className="navbar-icon-title">Login</span>
					</a>
				</li>
				<li className="ml-4">
					<a
						className="flex-column items-center"
						href="./wishlist/wishlist.html"
					>
						<span className="relative">
							<i className="fa fa-heart icon-stroke badge-icon"> </i>
							<span className="badge red-badge">0</span>
						</span>

						<span className="navbar-icon-title">Wishlist</span>
					</a>
				</li>
				<li className="ml-4">
					<a className="flex-column items-center" href="./cart/cart.html">
						<span className="relative">
							<i className="fa fa-shopping-bag icon-stroke badge-icon relative"></i>
							<span className="badge red-badge">0</span>
						</span>
						<span className="navbar-icon-title">Bag</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};
