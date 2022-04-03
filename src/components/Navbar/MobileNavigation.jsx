import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./Navbar.css";

export const MobileNavigation = ({
  toggleMenu,
  setToggleMenu,
  handleLogout,
}) => {
  const { user } = useAuth();

  return (
    <div
      className={`sidebar transition-2 fixed top-0 left-0 z-3 ${
        toggleMenu ? "sidebar-mobile" : ""
      }`}
    >
      <div className="sidebar-header p-2 flex-row content-space-between items-center">
        <h3 className="sidebar-title icon">
          <span className="material-icons-outlined mr-1">account_circle</span>{" "}
          Welcome
        </h3>
        <button
          onClick={() => setToggleMenu(false)}
          className="sidebar-close-btn flex-row flex-center rounded-full"
        >
          <span className="material-icons-outlined">close</span>
        </button>
      </div>

      <ul className="mt-1 p-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active-link" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active-link" : ""}`
            }
          >
            Shop now
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to="/profile"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active-link" : ""}`
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/addresses"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active-link" : ""}`
            }
          >
            Addresses
          </NavLink>
        </li>
        <li>
          {!user ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="logout-btn w-100 text-left sidebar-link"
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

MobileNavigation.defaultProps = {
  toggleMenu: false,
  setToggleMenu: () => {},
  handleLogout: () => {},
};
