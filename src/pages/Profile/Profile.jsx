import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import "./Profile.css";

export const Profile = () => {
  useScrollToTop();
  useDocumentTitle("Profile");

  return (
    <>
      <h3 className="mt-6 mb-4 text-center">My Profile</h3>
      <main className="profile-container flex-row flex-center m-auto w-100">
        <div className="flex-row w-100 mx-2">
          <ul className="profile-left-section flex-column border-r">
            <li>
              <NavLink
                end
                to="/profile"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : ""} profile-link p-2`
                }
              >
                Profile Information
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/profile/addresses"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : ""} profile-link p-2`
                }
              >
                Manage Addresses
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/profile/orders"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : ""} profile-link p-2`
                }
              >
                Order Details
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/profile/settings"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : ""} profile-link p-2`
                }
              >
                Account Settings
              </NavLink>
            </li>
          </ul>
          <section className="profile-right-section mx-2 w-100 mt-3 ml-3">
            <Outlet />
          </section>
        </div>
      </main>
    </>
  );
};
