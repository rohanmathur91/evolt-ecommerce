import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { Input } from "../../components";
import "./Login.css";

export const Login = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	useScrollToTop();
	useDocumentTitle("Evolt | Login");

	const handleInputChange = (event, field) => {
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[field]: event.target.value,
		}));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<div className="w-100 flex-row content-center mt-4">
			<form
				onSubmit={handleFormSubmit}
				className="login-form py-2 px-4 w-100 card-shadow rounded-sm m-2"
			>
				<h3 className="text-center mt-2 mb-3">Login</h3>
				<Input
					id="email"
					type="email"
					title="Email address"
					value={credentials.email}
					placeholder="Enter your email"
					updateValue={handleInputChange}
				/>

				<Input
					id="password"
					type="password"
					title="Password"
					value={credentials.password}
					placeholder="Enter your password"
					updateValue={handleInputChange}
				/>
				<div className="login-remember-me flex-row content-space-between my-2">
					{/* TODO: For remember me, increase the expriy of JWT token from backend */}
					<label htmlFor="remember-me">
						<input className="mr-1" type="checkbox" id="remember-me" /> Remember
						me
					</label>
				</div>

				<button className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1 mb-2 rounded-sm">
					Login
				</button>

				<div className="text-center mb-2">
					<Link to="/signup">
						Create New Account <i className="fa fa-chevron-right"></i>
					</Link>
				</div>
			</form>
		</div>
	);
};
