import React from "react";
import "./Signup.css";

export const Signup = () => {
	return (
		<div class="w-100 flex-row content-center">
			<form class="signup-form w-100 py-2 px-4 m-2 card-shadow rounded-sm">
				<h3 class="text-center mt-2 mb-3">Signup</h3>

				<Input
					id="firstName"
					type="text"
					title="Full Name"
					placeholder="Enter your full name"
				/>
				<div class="flex-column mb-3">
					<label for="email">Full Name</label>
					<input
						class="mt-1 py-1 px-2 text-base border rounded-sm"
						id="fname"
						type="text"
						placeholder="Enter your full name"
					/>
				</div>
				<div class="flex-column mb-3">
					<label for="email">Email address</label>
					<input
						class="mt-1 py-1 px-2 text-base border rounded-sm"
						id="email"
						type="email"
						placeholder="Enter your email"
					/>
				</div>

				<div class="flex-column mb-3">
					<label for="password">Password</label>
					<input
						class="mt-1 py-1 px-2 text-base border rounded-sm"
						id="password"
						type="password"
						placeholder="Enter your password"
					/>
				</div>
				<div class="flex-column mb-3">
					<label htmlFor="password">Confirm Password</label>
					<input
						class="mt-1 py-1 px-2 text-base border rounded-sm"
						id="password"
						type="password"
						placeholder="Re-enter your password"
					/>
				</div>

				<button class="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1 mb-2 rounded-sm">
					Signup
				</button>

				<div class="text-center mb-2">
					<a href="./login.html">Already a user?</a>
				</div>
			</form>
		</div>
	);
};
