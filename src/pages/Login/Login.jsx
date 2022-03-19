import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { Input } from "../../components";
import "../../components/Input/Form.css";

export const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	useScrollToTop();
	useDocumentTitle("Login");

	const handleInputChange = (event, field) => {
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[field]: event.target.value,
		}));
	};

	const handleFormSubmit = async (event) => {
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

				<div className="relative">
					<Input
						id="password"
						type={showPassword ? "text" : "password"}
						title="Password"
						value={credentials.password}
						placeholder="Enter your password"
						updateValue={handleInputChange}
					/>
					{
						<span
							className="material-icons-outlined cursor-pointer visibility-icon"
							onClick={() => setShowPassword((showPassword) => !showPassword)}
						>
							{showPassword ? "visibility" : "visibility_off"}
						</span>
					}
				</div>

				<button className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1 mb-2 rounded-sm">
					Login
				</button>

				<div className="mb-2">
					<Link to="/signup" className="flex-row flex-center">
						Create New Account{" "}
						<span className="material-icons-outlined ml-1">east</span>
					</Link>
				</div>
			</form>
		</div>
	);
};
