import React from "react";
import "./Footer.css";

export const Footer = () => {
	return (
		<footer className="footer flex-column flex-center p-4">
			<p className="mb-1">Made by Rohan</p>

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
	);
};
