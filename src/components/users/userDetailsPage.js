import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDeatils() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("profile");

    useEffect(() => {
        const pathParts = location.pathname.split("/");
        const currentTab = pathParts[pathParts.length - 1];
    
        setActiveTab(currentTab || "profile");
      }, [location.pathname]);
    return (
        <div>
      <ul className="nav nav-tabs">
        <li className={`nav-item ${activeTab === "profile" ? "active" : ""}`}>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className={`nav-item ${activeTab === "reviews" ? "active" : ""}`}>
          <Link to="/reviews" className="nav-link">
            Reviews
          </Link>
        </li>
        <li className={`nav-item ${activeTab === "other" ? "active" : ""}`}>
          <Link to="/other" className="nav-link">
            Other
          </Link>
        </li>
      </ul>
    </div>
    )
}
export default UserDeatils;