import React from "react";
import "./AdminPanel.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Midcontent from "./Midcontent";

const AdminPanel = ({ user }) => {
  return (
    <div className="adminPanel">
      <Sidebar />
      <div className="adminPanel-box1">
        <Header user={user} />
        <Midcontent user={user} />
      </div>
    </div>
  );
};

export default AdminPanel;
