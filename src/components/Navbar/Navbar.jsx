import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { pathname } = useLocation();

	return (
		<>
			<nav className="navigation flex-row items-center content-space-between w-100 sticky top-0 left-0 z-3">
				<div className="flex-row flex-center">
					<div onClick={() => setToggleMenu(true)} className="menu mr-1">
						<span class="hamburger-menu material-icons">menu</span>
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

				{pathname === "/products" && (
					<span className="search relative rounded-sm">
						<span className="search-icon absolute">
							<span class="material-icons-outlined">search</span>
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
				)}

				<ul className="navbar-options flex-row flex-center">
					<li className="profile-icon relative">
						<Link to="/login" className="flex-column items-center">
							<div className="icon">
								<span class="material-icons-outlined badge-icon">
									person_outline
								</span>
							</div>
							<span className="navbar-icon-title">Login</span>
						</Link>
						<div className="profile-options rounded-sm p-1 transition-2">
							<div className="profile-option-title mx-1 py-1">Welcome</div>
							<Link to="/profile" className="p-1 profile-option">
								Profile
							</Link>
							<Link to="/login" className="p-1 profile-option">
								Login/Signup
							</Link>
						</div>
					</li>
					<li className="ml-4">
						<Link to="/wishlist" className="flex-column items-center">
							<div className="relative icon">
								<span class="material-icons-outlined badge-icon">
									favorite_border
								</span>
								<span className="badge red-badge">{0}</span>
							</div>

							<span className="navbar-icon-title">wishlist</span>
						</Link>
					</li>
					<li className="ml-4">
						<Link to="/cart" className="flex-column items-center">
							<div className="relative icon">
								<span class="material-icons-outlined badge-icon">
									shopping_cart
								</span>
								<span className="badge red-badge">{0}</span>
							</div>

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
						<span class="material-icons-outlined">close</span>
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
							to="/login"
							className={({ isActive }) =>
								`sidebar-link ${isActive ? "active-link" : ""}`
							}
						>
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};
