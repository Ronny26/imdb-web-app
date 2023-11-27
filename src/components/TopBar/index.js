import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

const TopBar = () => {
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
                  <Link to="/signin" className="im-icon" href="">
                     <VscAccount/>
                  </Link>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
