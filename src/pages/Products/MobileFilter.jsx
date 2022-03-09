import React from "react";
import { useProduct } from "../../context";
import "./MobileFilter.css";

export const MobileFilter = ({ setShowFilter }) => {
	const {
		productFilter: { price, inStockOnly },
		productDispatch,
	} = useProduct();

	return (
		<div className="mobile-filter-wrapper">
			<div className="mobile-filter card-shadow p-4">
				<div className="flex-row content-space-between items-center pb-1 mb-2 border-bottom">
					<div className="text-base font-semibold">Filters</div>
					<button
						onClick={() => setShowFilter((prev) => !prev)}
						className="mobile-filter-close"
					>
						<i className="fa fa-times-circle-o"></i>
					</button>
				</div>
				<div className="flex-row content-space-between">
					<ul className="mr-1">
						<li className="filter-header mb-2">
							<div className="text-base font-bold">Availability & Price</div>
						</li>
						<li className="filter-item mb-2">
							<label htmlFor="filter-stock">
								<input
									type="checkbox"
									className="mr-2"
									id="filter-stock"
									checked={inStockOnly}
									onChange={(e) =>
										productDispatch({
											type: "FILTER_BY_IN_STOCK_ONLY",
											payload: e.target.checked,
										})
									}
								/>
								In stock only
							</label>
						</li>

						<li className="filter-item mb-1">
							<div>
								<label htmlFor="price-range">Price: 0 to {price}</label>
							</div>
							<input
								min="0"
								max="5000"
								step="50"
								type="range"
								value={price}
								id="price-range"
								onChange={(e) =>
									productDispatch({
										type: "FILTER_BY_PRICE",
										payload: Number(e.target.value),
									})
								}
							/>
						</li>
					</ul>

					<ul className="mx-1">
						<li className="filter-header mb-2 flex-row content-space-between">
							<div className="text-base font-semibold">Brand</div>
						</li>
						<li className="filter-item mb-1">
							<label>
								<input className="mr-2" type="checkbox" name="bose" />
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
					</ul>

					<ul>
						<li className="filter-header mb-2">
							<div className="text-base font-semibold">Type</div>
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
								Speaker
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
					</ul>
				</div>

				<button
					onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
					className="mobile-clear-btn btn btn-solid mt-2"
				>
					Clear all
				</button>
			</div>
		</div>
	);
};
