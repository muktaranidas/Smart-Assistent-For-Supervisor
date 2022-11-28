import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <React.Fragment>
      <li className="bg-slate-500 text-white font-bold mr-2 rounded">
        <Link to="/home">Home</Link>
      </li>

      {user?.uid ? (
        <>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <Link to="/submit-proposal">
              Submit <br /> Proposal
            </Link>
          </li>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <Link to="/check-proposal">
              Check <br /> Proposal
            </Link>
          </li>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <Link to="/submit-final-proposal">
              Submit <br /> Final Proposal
            </Link>
          </li>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <Link to="/check-project-report">
              CheckProject <br /> Report
            </Link>
          </li>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <Link to="/accept-or-reject">
              AcceptOr <br /> Reject Project
            </Link>
          </li>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <button onClick={handleLogOut}>SignOut</button>
          </li>
        </>
      ) : (
        <>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <Link to="/login">Login</Link>
          </li>
          <li className="bg-slate-500 text-white font-bold mr-2 rounded">
            <Link to="/signup">SignUp</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100  flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost  normal-case text-2xl font-bold">
          Smart Assistant For Supervisor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
