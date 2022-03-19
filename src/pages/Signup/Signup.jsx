import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { Input } from "../../components";
import "../../components/Input/Form.css";

export const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [credentials, setCredentials] = useState({
		email: "",
		fullName: "",
		password: "",
		confirmPassword: "",
	});

	useScrollToTop();
	useDocumentTitle("Signup");

	const validateSignupForm = ({
		email,
		fullName,
		password,
		confirmPassword,
	}) => {
		const error = {
			fullName: "",
			email: "Please enter valid email",
			password: "",
			confirmPassword: "",
		};

		const onlyAlphabets = /^[a-zA-Z]+$/;
		const isFullNameValid =
			fullName.length >= 4 && onlyAlphabets.test(fullName);
		const isEmailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

		if (!isFullNameValid) error.fullName = "Please enter valid name";
		if (!isEmailValid) error.fullName = "Please enter valid email";
	};

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
		<div className="w-100 flex-row content-center">
			<form
				onSubmit={handleFormSubmit}
				className="signup-form w-100 py-2 px-4 m-2 card-shadow rounded-sm"
			>
				<h3 className="text-center mt-2 mb-3">Signup</h3>

				<Input
					id="fullName"
					type="text"
					title="Full Name"
					placeholder="Enter your full name"
					value={credentials.fullName}
					updateValue={handleInputChange}
					error="Worng name"
				/>

				<Input
					id="email"
					type="email"
					title="Email address"
					placeholder="Enter your email"
					value={credentials.email}
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
							onClick={() => setShowPassword((showPassword) => !showPassword)}
							className="material-icons-outlined cursor-pointer visibility-icon"
						>
							{showPassword ? "visibility" : "visibility_off"}
						</span>
					}
				</div>

				<Input
					id="confirmPassword"
					type="password"
					title="Confirm Password"
					value={credentials.confirmPassword}
					placeholder="Re-enter your password"
					updateValue={handleInputChange}
				/>

				<button className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1 mb-2 rounded-sm">
					Signup
				</button>

				<div className="text-center mb-2">
					<Link to="/login">Already a user?</Link>
				</div>
			</form>
		</div>
	);
};
