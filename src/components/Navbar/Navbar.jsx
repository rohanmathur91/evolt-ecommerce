import React, { useState } from "react";
import { useProduct } from "../../context";
import "./Navbar.css";

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { searchQuery, productDispatch } = useProduct();

	return (
		<>
			<nav className="navigation flex-row items-center content-space-between w-100 sticky top-0 left-0 z-3">
				<div className="flex-row items-center">
					<div onClick={() => setToggleMenu(true)} className="menu mr-1 p-1">
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
						value={searchQuery}
						type="text"
						autoComplete="false"
						placeholder="search..."
						className="search-input w-100 py-1 px-2 text-base rounded-sm"
						onChange={(e) =>
							productDispatch({ type: "SEARCH", payload: e.target.value })
						}
					/>
				</span>

				<ul className="navbar-options flex-row flex-center">
					<li className="profile-icon-hide">
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

			{/* mobile navigation */}
			<div
				className={`sidebar fixed top-0 left-0 z-3 ${
					toggleMenu ? "sidebar-mobile" : ""
				}`}
			>
				<div className="sidebar-header p-2 flex-row content-space-between items-center">
					<h3>Welcome, user!</h3>
					<button
						onClick={() => setToggleMenu(false)}
						className="sidebar-close-btn flex-center rounded-full"
					>
						<i className="fa fa-times"></i>
					</button>
				</div>

				<ul className="mt-1 p-1">
					<li className="sidebar-item">
						<a href="#" className="sidebar-link">
							Home
						</a>
					</li>
					<li className="sidebar-item">
						<a href="#" className="sidebar-link">
							Shop now
						</a>
					</li>
					<li className="sidebar-item">
						<a href="#" className="sidebar-link">
							Profile
						</a>
					</li>
					<li className="sidebar-item">
						<a href="#" className="sidebar-link">
							Logout
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
