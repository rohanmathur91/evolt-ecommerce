import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Profile.css";

export const Profile = () => {
  return (
    <>
      <h3 className="mt-6 mb-4 text-center">My Profile</h3>
      <main className="profile-container flex-row flex-center m-auto w-100">
        <div className="flex-row w-100 mx-2">
          <ul className="profile-left-section flex-column border-r">
            <li>
              <Link to="/profile" className="p-2 profile-link">
                Profile Information
              </Link>
            </li>
            <li>
              <Link to="/profile/addresses" className="p-2 profile-link">
                Manage Addresses
              </Link>
            </li>
            <li>
              <Link to="/profile/settings" className="p-2 profile-link">
                Account Settings
              </Link>
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
