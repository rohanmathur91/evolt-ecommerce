import React from "react";
import "./Products.css";

export const Products = () => {
	return (
		<div>
			<div class="products-container flex-row">
				<aside class="filters flex-column py-3 px-4 border-r">
					<div class="filter-title mt-2 p-1 flex-row content-space-between">
						<h4>Filters</h4>
						<button class="text-underline">Clear all</button>
					</div>
					<ul class="mt-2 ml-1">
						<li class="filter-header mb-1">
							<h4>Sort</h4>
						</li>

						<li class="filter-item mb-1">
							<label>
								<input
									class="mr-2"
									type="radio"
									name="price"
									id="filter-price"
								/>
								Price (Low to High)
							</label>
						</li>
						<li class="filter-item mb-1">
							<label>
								<input
									class="mr-2"
									type="radio"
									name="price"
									id="filter-price"
								/>
								Price (High to Low)
							</label>
						</li>
						<li class="filter-item">
							<div class="divider"></div>
						</li>
						<li class="filter-header mb-1">
							<h4>Brand</h4>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-canon">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-canon"
								/>
								Bose
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-fuji">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-fuji"
								/>
								Boat
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-nikon">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-nikon"
								/>
								Marshall
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-olympus">
								<input
									class="mr-2"
									type="checkbox"
									name="price"
									id="filter-olympus"
								/>
								Sony
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-sony">
								<input
									class="mr-2"
									type="checkbox"
									name="price"
									id="filter-sony"
								/>
								JBL
							</label>
						</li>

						<li class="filter-item">
							<div class="divider"></div>
						</li>

						<li class="filter-header mb-1">
							<h4>Type</h4>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-resolution-1">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-resolution-1"
								/>
								Wired
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-resolution-2">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-resolution-2"
								/>
								Wireless
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-resolution-3">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-resolution-3"
								/>
								Noise Cancelling
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-resolution-4">
								<input
									class="mr-2"
									type="checkbox"
									name="price"
									id="filter-resolution-4"
								/>
								Tangle Free Cord
							</label>
						</li>
						<li class="filter-item">
							<div class="divider"></div>
						</li>

						<li class="filter-header mb-1">
							<h4>Rating</h4>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-rating-5">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-rating-5"
								/>
								5 star
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-rating-4">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-rating-4"
								/>
								4 star
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-rating-3">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-rating-3"
								/>
								3 star
							</label>
						</li>
						<li class="filter-item mb-1">
							<label for="filter-rating-2">
								<input
									class="mr-2"
									type="checkbox"
									name="brand"
									id="filter-rating-2"
								/>
								2 star
							</label>
						</li>
					</ul>
				</aside>

				<div class="products w-100 p-1 pt-6 mb-6">{/*ProductCard  */}</div>

				<div class="mobile-filters fixed left-0 bottom-0 flex-row w-100">
					<button class="sort-btn filter-btn py-1 px-2 w-100 border-r transition-3">
						<i class="fa fa-sort mr-1"></i>
						Sort
					</button>
					<button class="filter-btn p-2 w-100 transition-3">
						<i class="fa fa-filter mr-1"></i>
						Filter
					</button>
				</div>
			</div>
		</div>
	);
};
