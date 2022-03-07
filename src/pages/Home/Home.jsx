import React from "react";

export const Home = () => {
	return (
		<div>
			<nav class="navigation flex-row items-center content-space-between w-100 sticky top-0 left-0 z-3">
				<div class="flex-row items-center">
					<div class="menu hide mr-1 p-1">
						<div class="hamburger hamburger-line1"></div>
						<div class="hamburger hamburger-line2"></div>
						<div class="hamburger hamburger-line3"></div>
					</div>

					<a href="./index.html">
						<h3 class="brand-logo font-black">EVOLT</h3>
					</a>

					<div class="navbar-left-menu ml-4">
						<a class="navbar-cta mr-1 rounded-sm p-1" href="./index.html">
							Home
						</a>
						<a class="navbar-cta rounded-sm p-1" href="./products/product.html">
							Shop now
						</a>
					</div>
				</div>

				<span class="search flex-row items-center border rounded-sm">
					<button class="search-btn">
						<i class=" fa fa-search search-icon ml-2"></i>
					</button>
					<input
						class="search-input w-100 py-1 px-2 text-base rounded-sm"
						id="search"
						type="search"
						placeholder="search..."
					/>
				</span>

				<ul class="navbar-options flex-row flex-center">
					<li>
						<a class="flex-column items-center" href="./auth/login.html">
							<i class="fa fa-user icon-stroke badge-icon"></i>
							<span class="navbar-icon-title">Login</span>
						</a>
					</li>
					<li class="ml-4">
						<a class="flex-column items-center" href="./wishlist/wishlist.html">
							<span class="relative">
								<i class="fa fa-heart icon-stroke badge-icon"> </i>
								<span class="badge red-badge">0</span>
							</span>

							<span class="navbar-icon-title">Wishlist</span>
						</a>
					</li>
					<li class="ml-4">
						<a class="flex-column items-center" href="./cart/cart.html">
							<span class="relative">
								<i class="fa fa-shopping-bag icon-stroke badge-icon relative"></i>
								<span class="badge red-badge">0</span>
							</span>
							<span class="navbar-icon-title">Bag</span>
						</a>
					</li>
				</ul>
			</nav>

			<header class="overflow-hidden gutter-bottom">
				<img class="banner w-100" src="./assests/banner.jpg" alt="banner" />
			</header>

			<section class="gutter-bottom category-container m-auto p-1">
				<div class="text-lg font-semibold flex-row content-space-between mx-2 gutter-bottom">
					<div>Categories</div>
					<a class="text-lg" href="./products/product.html">
						Shop now <i class="fa fa-long-arrow-right ml-1"></i>
					</a>
				</div>
				<article class="category flex-row content-space-between wrap mx-2 gutter-bottom">
					<a
						class="category-item my-1 rounded-sm overflow-hidden relative"
						href="././products/product.html"
					>
						<img
							class="p-1 relative"
							src="./assests/jbl-product-2.jpg"
							alt="product"
						/>
						<div class="text-overlay flex-row flex-center">
							<p class="overlay-content p-1 rounded-sm font-semibold">Sports</p>
						</div>
					</a>
					<a
						class="category-item my-1 rounded-sm overflow-hidden relative"
						href="././products/product.html"
					>
						<img
							class="p-1 relative"
							src="./assests/marshall-product-1.jpg"
							alt="product"
						/>
						<div class="text-overlay flex-row flex-center">
							<p class="overlay-content p-1 rounded-sm font-semibold">
								Classic speakers
							</p>
						</div>
					</a>
					<a
						class="category-item my-1 rounded-sm overflow-hidden relative"
						href="././products/product.html"
					>
						<img class="p-1 relative" src="./assests/bose.jpg" alt="product" />
						<div class="text-overlay flex-row flex-center">
							<p class="overlay-content p-1 rounded-sm font-semibold">
								Wireless
							</p>
						</div>
					</a>
					<a
						class="category-item my-1 rounded-sm overflow-hidden relative"
						href="././products/product.html"
					>
						<img
							class="p-1 relative"
							src="./assests/bose-buds.jpeg"
							alt="product"
						/>
						<div class="text-overlay flex-row flex-center">
							<p class="overlay-content p-1 rounded-sm font-semibold">Sports</p>
						</div>
					</a>
					<a
						class="category-item my-1 rounded-sm overflow-hidden relative"
						href="././products/product.html"
					>
						<img
							class="p-1 relative"
							src="./assests/JBL_C115TWS_Black_01.webp"
							alt="product"
						/>
						<div class="text-overlay flex-row flex-center">
							<p class="overlay-content p-1 rounded-sm font-semibold">Gaming</p>
						</div>
					</a>
				</article>

				<article class="arrival-container m-2 flex-row flex-center gutter-bottom">
					<a
						class="w-100 rounded-sm overflow-hidden"
						href="./products/product.html"
					>
						<img
							class="img-transition arrival-img"
							src="./assests/jbl-banner.webp"
							alt="arrival"
						/>
					</a>
					<a
						class="w-100 overflow-hidden rounded-sm"
						href="./products/product.html"
					>
						<img
							class="img-transition arrival-img"
							src="./assests/bose-banner.JPG"
							alt="arrival"
						/>
					</a>
				</article>
			</section>

			<footer class="footer flex-column flex-center p-4">
				<p class="mb-1">Made by Rohan 🛠</p>

				<div>
					<a
						class="text-lg mx-1"
						href="https://github.com/rohanmathur91/evolt-shop"
						target="_blank"
					>
						<i class="fa fa-github social-icons transition-2"></i>
					</a>
					<a
						class="text-lg mx-1"
						href="https://twitter.com/@rohanmathur91"
						target="_blank"
					>
						<i class="fa fa-twitter social-icons transition-2"></i>
					</a>
					<a
						class="text-lg mx-1"
						href="https://www.linkedin.com/in/rohanmathur04/"
						target="_blank"
					>
						<i class="fa fa-linkedin-square social-icons transition-2"></i>
					</a>
				</div>
			</footer>
		</div>
	);
};
