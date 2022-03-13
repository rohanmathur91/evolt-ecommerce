import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart, useProduct } from "../../context";
import "./Navbar.css";

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { searchQuery, productDispatch } = useProduct();
	const { wishlist, cartProducts } = useCart();

	return (
		<>
			<nav className="navigation flex-row items-center content-space-between w-100 sticky top-0 left-0 z-3">
				<div className="flex-row items-center">
					<div onClick={() => setToggleMenu(true)} className="menu mr-1 p-1">
						<div className="hamburger hamburger-line1"></div>
						<div className="hamburger hamburger-line2"></div>
						<div className="hamburger hamburger-line3"></div>
					</div>

					<Link to="/">
						<h3 className="brand-logo font-black">EVOLT</h3>
					</Link>

					<div className="navbar-left-menu ml-4">
						<Link to="/" className="navbar-cta font-bold mr-1 rounded-sm p-1">
							Home
						</Link>
						<Link
							to="/products"
							className="navbar-cta font-bold rounded-sm p-1"
						>
							Shop now
						</Link>
					</div>
				</div>

				<span className="search relative rounded-sm">
					<span className="search-icon absolute">
						<i className="fa fa-search"></i>
					</span>
					<input
						value={searchQuery}
						type="text"
						autoComplete="false"
						placeholder="search..."
						className="search-input border w-100 py-1 pl-6 pr-2 text-base rounded-sm"
						onChange={(e) =>
							productDispatch({ type: "SEARCH", payload: e.target.value })
						}
					/>
				</span>

				<ul className="navbar-options flex-row flex-center">
					<li className="profile-icon-hide">
						<Link to="/login" className="flex-column items-center">
							<i className="fa fa-user icon-stroke badge-icon"></i>
							<span className="navbar-icon-title">Login</span>
						</Link>
					</li>
					<li className="ml-4">
						<Link to="/wishlist" className="flex-column items-center">
							<span className="relative">
								<i className="fa fa-heart icon-stroke badge-icon"></i>
								<span className="badge red-badge">{wishlist.length}</span>
							</span>

							<span className="navbar-icon-title">wishlist</span>
						</Link>
					</li>
					<li className="ml-4">
						<Link to="/cart" className="flex-column items-center">
							<span className="relative">
								<i className="fa fa-shopping-cart icon-stroke badge-icon"></i>
								<span className="badge red-badge">{cartProducts.length}</span>
							</span>
							<span className="navbar-icon-title">Bag</span>
						</Link>
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
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								`sidebar-link ${isActive ? "active-link" : ""}`
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/products"
							className={({ isActive }) =>
								`sidebar-link ${isActive ? "active-link" : ""}`
							}
						>
							Shop now
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/profile"
							className={({ isActive }) =>
								`sidebar-link ${isActive ? "active-link" : ""}`
							}
						>
							Profile
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/logout"
							className={({ isActive }) =>
								`sidebar-link ${isActive ? "active-link" : ""}`
							}
						>
							Logout
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};
