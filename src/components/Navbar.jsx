import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext/AuthContext";
import logo from "../assets/jobicon.png";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleLogout = () => {
    userLogout();
  };

  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/myApplications">My Applications</Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu flex gap-4 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl flex items-center gap-2 normal-case">
          <img className="w-8 h-8" src={logo} alt="" /> Job Portal
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link onClick={handleLogout} className="btn">
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link className="btn" to="/register">
              Register
            </Link>
            <Link className="btn" to="/signin">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
