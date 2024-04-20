import React from "react";
import "./Sidebar.css";
import sidebar from "../../Images/SideBar.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div id="sidebarPage" className="sidebar sidebar2">
      <img src={sidebar} />
      <div className="sidebarButton">
        <Link
          className="btn"
          to="/userPannel-dashboard"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          DASHBOARD
        </Link>
        <Link
          to="/userPannel-assesments"
          className="btn"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          ASSESSMENT
        </Link>
        <Link
          className="btn"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          DAWNLOAD CERTIFICATE
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
