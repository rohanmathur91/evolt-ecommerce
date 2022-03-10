import React from "react";
import { Checkbox } from "./Checkbox";
import { useProduct } from "../../context";
import "./MobileFilter.css";

export const MobileFilter = ({ setShowFilter }) => {
	const {
		productFilter: { price, inStockOnly, brands, types },
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
				<div className="flex-column">
					<ul className="mb-2">
						<li className="filter-header mb-2">
							<div className="text-base font-bold">Availability & Price</div>
						</li>
						<li className="filter-item mb-2">
							<label htmlFor="filter-stock" className="cursor-pointer">
								<input
									type="checkbox"
									className="mr-2 cursor-pointer"
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

						<li className="filter-item mb-1 flex-column">
							<label htmlFor="price-range">Price range: 0 to {price}</label>
							<input
								min="0"
								max="5000"
								step="50"
								type="range"
								value={price}
								id="price-range"
								className="cursor-pointer"
								onChange={(e) =>
									productDispatch({
										type: "FILTER_BY_PRICE",
										payload: Number(e.target.value),
									})
								}
							/>
						</li>
					</ul>

					<ul className="mb-2">
						<li className="filter-header mb-2">
							<div className="text-base font-semibold">Brand</div>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-bose" className="cursor-pointer">
								<input
									name="brand"
									type="checkbox"
									id="filter-bose"
									className="mr-2 cursor-pointer"
								/>
								Bose
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-boat" className="cursor-pointer">
								<input
									name="brand"
									type="checkbox"
									id="filter-boat"
									className="mr-2 cursor-pointer"
								/>
								Boat
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-marshall" className="cursor-pointer">
								<input
									name="brand"
									type="checkbox"
									id="filter-marshall"
									className="mr-2 cursor-pointer"
								/>
								Marshall
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-sony" className="cursor-pointer">
								<input
									name="price"
									type="checkbox"
									id="filter-sony"
									className="mr-2 cursor-pointer"
								/>
								Sony
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-jbl" className="cursor-pointer">
								<input
									name="price"
									type="checkbox"
									id="filter-jbl"
									className="mr-2 cursor-pointer"
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
							<Checkbox
								id="filter-wired"
								value={types.wired}
								actionType="FILTER_BY_TYPE"
								payload="wired"
								title="Wired"
							/>
						</li>
						<li className="filter-item mb-1">
							<Checkbox
								id="filter-wireless"
								value={types.wireless}
								actionType="FILTER_BY_TYPE"
								payload="wireless"
								title="Wireless"
							/>
						</li>
						<li className="filter-item mb-1">
							<Checkbox
								id="filter-speaker"
								value={types.speaker}
								actionType="FILTER_BY_TYPE"
								payload="speaker"
								title="Speaker"
							/>
						</li>
						<li className="filter-item mb-1">
							<Checkbox
								id="filter-noise-cancelling"
								value={types.noiseCancelling}
								actionType="FILTER_BY_TYPE"
								payload="noiseCancelling"
								title="Noise Cancelling"
							/>
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
