import React, { useState, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { useAuth, useCart } from "../../context";
import {
	signupErrorReducer,
	signUpErrorInitialState,
	CLEAR_SIGNUP_FORM,
	SET_SIGNUP_EMAIL_ERROR,
	SET_SIGNUP_FULLNAME_ERROR,
	SET_SIGNUP_PASSWORD_ERROR,
	SET_SIGNUP_CONFIRM_PASSWORD_ERROR,
	UPDATE_USER_CART,
	UPDATE_USER_WISHLIST,
} from "../../reducer";
import { validateSignupForm } from "../../utils";
import { Input } from "../../components";
import "../../components/Input/Form.css";
import axios from "axios";

export const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [credentials, setCredentials] = useState({
		email: "",
		fullName: "",
		password: "",
		confirmPassword: "",
	});
	const [errorState, errorDispatch] = useReducer(
		signupErrorReducer,
		signUpErrorInitialState
	);
	const { updateUser } = useAuth();
	const { cartDispatch } = useCart();

	useScrollToTop();
	useDocumentTitle("Signup");

	const navigate = useNavigate();
	const handleInputChange = (event, field) => {
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[field]: event.target.value,
		}));
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const isValidForm = validateSignupForm(errorDispatch, credentials);
		if (isValidForm) {
			try {
				const {
					data: { createdUser, encodedToken },
				} = await axios.post("/api/auth/signup", credentials);

				updateUser(createdUser);
				cartDispatch({ type: UPDATE_USER_CART, payload: createdUser.cart });
				cartDispatch({
					type: UPDATE_USER_WISHLIST,
					payload: createdUser.wishlist,
				});

				localStorage.setItem("token", encodedToken);
				errorDispatch({ type: CLEAR_SIGNUP_FORM });
				navigate("/");
			} catch (error) {
				console.log("Something is wrong, please try later.");
			}
		}
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
					error={errorState.fullName}
					updateValue={handleInputChange}
					handleOnFocus={() =>
						errorDispatch({ type: SET_SIGNUP_FULLNAME_ERROR, payload: "" })
					}
				/>

				<Input
					id="email"
					type="email"
					title="Email address"
					placeholder="Enter your email"
					value={credentials.email}
					error={errorState.email}
					updateValue={handleInputChange}
					handleOnFocus={() =>
						errorDispatch({ type: SET_SIGNUP_EMAIL_ERROR, payload: "" })
					}
				/>

				<div className="relative">
					<Input
						id="password"
						type={showPassword ? "text" : "password"}
						title="Password"
						value={credentials.password}
						error={errorState.password}
						placeholder="Enter your password"
						updateValue={handleInputChange}
						handleOnFocus={() =>
							errorDispatch({ type: SET_SIGNUP_PASSWORD_ERROR, payload: "" })
						}
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
					error={errorState.confirmPassword}
					placeholder="Re-enter your password"
					updateValue={handleInputChange}
					handleOnFocus={() =>
						errorDispatch({
							type: SET_SIGNUP_CONFIRM_PASSWORD_ERROR,
							payload: "",
						})
					}
				/>

				<button className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1 mb-2 rounded-sm">
					Signup
				</button>

				<div className="text-sm mb-2 flex-row flex-center">
					Already a user?
					<Link
						to="/login"
						className="font-semibold text-sm flex-row flex-center ml-1"
					>
						Login
						<span className="material-icons-outlined redirect-icon">
							arrow_right
						</span>
					</Link>
				</div>
			</form>
		</div>
	);
};
