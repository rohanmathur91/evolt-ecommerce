import React from "react";
import "./Sidebar.css";

export const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
	return (
		<div
			className={`sidebar fixed top-0 left-0 z-3 ${
				toggleSidebar ? "sidebar-mobile" : ""
			}`}
		>
			<div className="sidebar-header p-2 flex-row content-space-between items-center">
				<h3>Welcome, user!</h3>
				<button
					onClick={() => setToggleSidebar(false)}
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
	);
};
