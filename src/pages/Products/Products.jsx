import React from "react";
import "./Products.css";

export const Products = () => {
	return (
		<div>
			<div className="products-container flex-row">
				<aside className="filters flex-column py-3 px-4 border-r">
					<div className="flex-row content-space-between mb-3 py-2 border-bottom">
						<div className="filter-title font-bold">Filters</div>
						<button className="filter-clear-btn text-base font-bold">
							Clear all
						</button>
					</div>
					<ul>
						<li className="filter-header mb-2">
							<div className="text-base font-bold">Sort By</div>
						</li>

						<li className="filter-item mb-1">
							<label>
								<input
									className="mr-2"
									type="radio"
									name="price"
									id="filter-price"
								/>
								Price (Low to High)
							</label>
						</li>
						<li className="filter-item">
							<label>
								<input
									className="mr-2"
									type="radio"
									name="price"
									id="filter-price"
								/>
								Price (High to Low)
							</label>
						</li>
					</ul>
					<ul>
						<li className="filter-item">
							<div className="divider"></div>
						</li>
						<li className="filter-header mb-2">
							<div className="text-base font-bold">Brand</div>
						</li>
						<li className="filter-item mb-1">
							<label for="filter-canon">
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
							<label for="filter-fuji">
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
							<label for="filter-nikon">
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
							<label for="filter-olympus">
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
							<label for="filter-sony">
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
							<label for="filter-resolution-1">
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
							<label for="filter-resolution-2">
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
							<label for="filter-resolution-3">
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
							<label for="filter-resolution-4">
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
							<label for="filter-rating-5">
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
							<label for="filter-rating-4">
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
							<label for="filter-rating-3">
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
							<label for="filter-rating-2">
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
				</aside>

				<div className="products w-100 p-1 pt-6 mb-6">{/*ProductCard  */}</div>

				<div className="mobile-filters fixed left-0 bottom-0 flex-row w-100">
					<button className="sort-btn filter-btn py-1 px-2 w-100 border-r transition-3">
						<i className="fa fa-sort mr-1"></i>
						Sort
					</button>
					<button className="filter-btn p-2 w-100 transition-3">
						<i className="fa fa-filter mr-1"></i>
						Filter
					</button>
				</div>
			</div>
		</div>
	);
};
