import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../contexts";
import { INITIALIZE_CART, INITIALIZE_WISHLIST } from "../../reducer";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { Input } from "../../components";

export const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { updateUser } = useAuth();
  const { cartDispatch } = useCart();

  useScrollToTop();
  useDocumentTitle("Login");

  const navigate = useNavigate();

  const handleInputChange = (event, field) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [field]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", credentials);

      updateUser(foundUser);
      cartDispatch({ type: INITIALIZE_CART, payload: foundUser.cart });
      cartDispatch({
        type: INITIALIZE_WISHLIST,
        payload: foundUser.wishlist,
      });

      localStorage.setItem("token", encodedToken);
      navigate("/");
    } catch (error) {
      setError("Email or password is incorrect");
    }
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

        <button
          onClick={() =>
            setCredentials({
              email: "adarshbalika@gmail.com",
              password: "adarshbalika",
            })
          }
          className="p-1 w-100 font-semibold btn btn-outlined transition-2 mr-1 mb-2 rounded-sm"
        >
          Login using dummy credentials
        </button>

        <button className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1 mb-2 rounded-sm">
          Login
        </button>

        {error && (
          <div className="mb-2 login-error-msg flex-row items-center">
            <span className="material-icons-outlined mr-1">error_outline</span>
            <p>{error}</p>
          </div>
        )}

        <div className="text-sm mb-2 flex-row flex-center">
          Not a user?
          <Link
            to="/signup"
            className="font-semibold text-sm flex-row flex-center ml-1"
          >
            Signup
            <span className="material-icons-outlined redirect-icon">
              arrow_right
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
