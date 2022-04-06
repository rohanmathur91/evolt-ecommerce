import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SEARCH, CLEAR_CART_AND_WISHLIST } from "../../reducer";
import { useAuth, useCart, useProduct } from "../../contexts";
import { MobileNavigation } from "./MobileNavigation";
import "./Navbar.css";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { pathname } = useLocation();
  const { wishlist, cartProducts, cartDispatch } = useCart();
  const { searchQuery, productDispatch } = useProduct();
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    updateUser(null);
    localStorage.removeItem("token");
    cartDispatch({ type: CLEAR_CART_AND_WISHLIST });
    navigate("/");
  };

  return (
    <>
      <nav className="navigation flex-row items-center content-space-between w-100 sticky top-0 left-0 z-3">
        <div className="flex-row flex-center">
          <div onClick={() => setToggleMenu(true)} className="menu mr-1">
            <span className="hamburger-menu material-icons">menu</span>
          </div>

          <Link to="/">
            <h3 className="brand-logo font-black">EVOLT</h3>
          </Link>

          <div className="navbar-left-menu ml-4">
            <Link to="/" className="navbar-cta font-bold mr-1 rounded-sm p-1">
              Home
            </Link>
            <Link
              to="/products"
              className="navbar-cta font-bold rounded-sm p-1"
            >
              Shop now
            </Link>
          </div>
        </div>

        {pathname === "/products" && (
          <span className="search relative rounded-sm">
            <span className="search-icon absolute">
              <span className="material-icons-outlined">search</span>
            </span>
            <input
              value={searchQuery}
              type="search"
              autoComplete="false"
              placeholder="search..."
              className="search-input border w-100 py-1 pl-6 pr-2 text-base rounded-sm"
              onChange={(e) =>
                productDispatch({ type: SEARCH, payload: e.target.value })
              }
            />
          </span>
        )}

        <ul className="navbar-options flex-row flex-center">
          <li className="profile-icon relative">
            {!user ? (
              <Link
                to="/login"
                className="cursor-pointer flex-column flex-center"
              >
                <span className="material-icons-outlined badge-icon">
                  person_outline
                </span>
                <span className="navbar-icon-title">Login</span>
              </Link>
            ) : (
              <>
                <div className="cursor-pointer flex-column flex-center">
                  <span className="material-icons-outlined badge-icon">
                    person_outline
                  </span>
                  <span className="navbar-icon-title">
                    {user ? "Profile" : "Login"}
                  </span>
                </div>
                <div className="profile-options rounded-sm p-1 transition-2">
                  <div className="profile-option-title mx-1 py-1">Welcome</div>
                  <Link to="/profile" className="p-1 profile-option">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="profile-option p-1 text-left logout-btn"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </li>
          <li className="ml-4">
            <Link to="/wishlist" className="flex-column items-center">
              <div className="relative icon">
                <span className="material-icons-outlined badge-icon">
                  favorite_border
                </span>
                <span className="badge red-badge">{wishlist.length}</span>
              </div>

              <span className="navbar-icon-title">wishlist</span>
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/cart" className="flex-column items-center">
              <div className="relative icon">
                <span className="material-icons-outlined badge-icon">
                  shopping_cart
                </span>
                <span className="badge red-badge">{cartProducts.length}</span>
              </div>

              <span className="navbar-icon-title">Cart</span>
            </Link>
          </li>
        </ul>
      </nav>
      <MobileNavigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        handleLogout={handleLogout}
      />
    </>
  );
};
