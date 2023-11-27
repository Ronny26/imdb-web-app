import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import useAuth from "../users/authenticateUser.js"
const TopBar = () => {
  const navigate = useNavigate();
  const { currentUser, signout } = useAuth();

  const handleUserIconClick = () => {
    console.log("handle user icon");
    console.log(currentUser);
    if (currentUser) {
      console.log("if");
      navigate("/profile");
    } else {
      console.log("else");
      navigate("/signin");
    }
  };

  const handleSignout = async () => {
    await signout();
    navigate("/");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            IMDB
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right list-group">
            <li>
              <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                  <Link to={currentUser ? "/profile" : "/signin"} onClick={handleUserIconClick} className="im-icon">
                     <VscAccount/>
                  </Link>
                </div>
              </form>
            </li>
            {currentUser && (
              <li>
                {}
                <button onClick={handleSignout} className="btn btn-link">
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
