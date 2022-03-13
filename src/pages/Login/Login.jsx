import React, { useState } from "react";
import { Input } from "../../components";
import "./Login.css";

export const Login = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	return (
		<div className="w-100 flex-row content-center mt-4">
			<form
				className="login-form py-2 px-4 w-100 card-shadow rounded-sm m-2"
				action="./login.html"
			>
				<h3 className="text-center mt-2 mb-3">Login</h3>
				<div className="flex-column mb-3">
					<label for="email">Email address</label>
					<input
						className="mt-1 py-1 px-2 text-base border rounded-sm"
						id="email"
						type="email"
						placeholder="Enter your email"
					/>
				</div>

				<div className="flex-column mb-3">
					<label for="password">Password</label>
					<input
						className="mt-1 py-1 px-2 text-base border rounded-sm"
						id="password"
						type="password"
						placeholder="Enter your password"
					/>
				</div>

				<div className="login-remember-me flex-row content-space-between my-2">
					<label for="remember-me">
						<input className="mr-1" type="checkbox" id="remember-me" /> Remember
						me
					</label>

					<a className="forgot-password font-bold" href="#">
						Forgot your Password?
					</a>
				</div>

				<button className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1 mb-2 rounded-sm">
					Login
				</button>

				<div className="text-center mb-2">
					<a href="./signup.html">
						Create New Account <i className="fa fa-chevron-right"></i>
					</a>
				</div>
			</form>
		</div>
	);
};
