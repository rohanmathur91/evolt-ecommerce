import React from "react";
import { useProduct } from "../../context/ProductContext";
import "./Filter.css";

export const Filter = () => {
	const {
		productFilter: { price, inStockOnly },
		productDispatch,
	} = useProduct();

	return (
		<>
			<ul>
				<li className="filter-item">
					<div className="divider"></div>
				</li>
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
					<label htmlFor="price-range">Price range: 0 to {price}</label>
					<input
						min="0"
						max="5000"
						step="50"
						type="range"
						id="price-range"
						value={price}
						onChange={(e) =>
							productDispatch({
								type: "FILTER_BY_PRICE",
								payload: Number(e.target.value),
							})
						}
					/>
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
					<label htmlFor="filter-resolution-2">
						<input
							className="mr-2"
							type="checkbox"
							name="brand"
							id="filter-resolution-2"
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
		</>
	);
};
