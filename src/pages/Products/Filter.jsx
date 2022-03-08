import React from "react";
import "./Filter.css";

export const Filter = () => {
	return (
		<ul>
			<li className="filter-item">
				<div className="divider"></div>
			</li>
			<li className="filter-header mb-2">
				<div className="text-base font-bold">Brand</div>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-canon">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-canon"
					/>
					Bose
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-fuji">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-fuji"
					/>
					Boat
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-nikon">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-nikon"
					/>
					Marshall
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-olympus">
					<input
						className="mr-2"
						type="checkbox"
						name="price"
						id="filter-olympus"
					/>
					Sony
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-sony">
					<input
						className="mr-2"
						type="checkbox"
						name="price"
						id="filter-sony"
					/>
					JBL
				</label>
			</li>

			<li className="filter-item">
				<div className="divider"></div>
			</li>

			<li className="filter-header mb-2">
				<div className="text-base font-bold">Type</div>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-resolution-1">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-resolution-1"
					/>
					Wired
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-resolution-2">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-resolution-2"
					/>
					Wireless
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-resolution-3">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-resolution-3"
					/>
					Noise Cancelling
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-resolution-4">
					<input
						className="mr-2"
						type="checkbox"
						name="price"
						id="filter-resolution-4"
					/>
					Tangle Free Cord
				</label>
			</li>
			<li className="filter-item">
				<div className="divider"></div>
			</li>

			<li className="filter-header mb-2">
				<div className="text-base font-bold">Rating</div>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-rating-5">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-rating-5"
					/>
					5 star
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-rating-4">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-rating-4"
					/>
					4 star
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-rating-3">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-rating-3"
					/>
					3 star
				</label>
			</li>
			<li className="filter-item mb-1">
				<label htmlFor="filter-rating-2">
					<input
						className="mr-2"
						type="checkbox"
						name="brand"
						id="filter-rating-2"
					/>
					2 star
				</label>
			</li>
		</ul>
	);
};