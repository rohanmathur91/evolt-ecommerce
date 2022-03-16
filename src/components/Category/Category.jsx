import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

export const Category = () => {
	const [categoryList, setCategorList] = useState([]);

	useEffect(() => {
		try {
			(async () => {
				const {
					data: { categories },
				} = await axios.get("/api/categories");
				setCategorList(categories);
			})();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			<div className="text-base font-semibold flex-row content-space-between mx-5 gutter-bottom">
				<div className="category-header font-semibold">Categories</div>
				<Link to="/products" className="flex-row flex-center">
					<span className="category-header-btn font-semibold">Shop now</span>{" "}
					<span className="material-icons-outlined font-base ml-1">east</span>
				</Link>
			</div>
			<article className="category">
				{categoryList &&
					categoryList.map(({ alt, image, category }, index) => (
						<Link key={index} to="/products">
							<div className="category-item flex-column rounded-sm">
								<img className="p-1" src={image} alt={alt} />
								<p className="category-name text-center p-1 rounded-sm font-semibold">
									{category}
								</p>
							</div>
						</Link>
					))}
			</article>
		</>
	);
};
