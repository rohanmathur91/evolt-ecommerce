import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import pageNotFound from "../../assets/pageNotFound.svg";

export const PageNotFound = () => {
  return (
    <main className="page-not-found flex-row flex-center wrap-reverse">
      <div className="m-1 px-2">
        <div className="text-lg font-bold">404, Page not found</div>
        <p className="not-found-message">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          title="Go back home"
          className="go-home-link flex-row items-center font-semibold mt-1"
        >
          <span className="material-icons-outlined mr-1">
            keyboard_backspace
          </span>
          Go back home
        </Link>
      </div>
      <img src={pageNotFound} alt="pageNotFound" className="w-30 h-30 m-1" />
    </main>
  );
};
