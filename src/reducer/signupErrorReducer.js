import {
	SET_SIGNUP_EMAIL_ERROR,
	SET_SIGNUP_FULLNAME_ERROR,
	SET_SIGNUP_PASSWORD_ERROR,
	SET_SIGNUP_CONFIRM_PASSWORD_ERROR,
	CLEAR_SIGNUP_FORM,
} from "./index";

export const signUpErrorInitialState = {
	email: "",
	fullName: "",
	password: "",
	confirmPassword: "",
};

export const signupErrorReducer = (errorState, { type, payload }) => {
	switch (type) {
		case SET_SIGNUP_EMAIL_ERROR:
			return { ...errorState, email: payload };
		case SET_SIGNUP_FULLNAME_ERROR:
			return { ...errorState, fullName: payload };

		case SET_SIGNUP_PASSWORD_ERROR:
			return { ...errorState, password: payload };

		case SET_SIGNUP_CONFIRM_PASSWORD_ERROR:
			return { ...errorState, confirmPassword: payload };

		case CLEAR_SIGNUP_FORM:
			return {
				email: "",
				fullName: "",
				password: "",
				confirmPassword: "",
			};

		default:
			errorState;
	}
};
