import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Person3Icon from "@mui/icons-material/Person3";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ManIcon from "@mui/icons-material/Man";
import "./Midcontent.css";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const Midcontent = ({ user }) => {
  return (
    <div className="midcontent-box">
      <div className="midcontent-section1">
        <div className="box">
          <PersonAddAltIcon />

          <div className="content">
            <span>Username</span>
            <span>{user.username}</span>
          </div>
        </div>
        <div className="box">
          <ManIcon />

          <div className="content">
            <span>Name</span>
            <span>{user.name}</span>
          </div>
        </div>
        <div className="box">
          <Diversity3Icon />

          <div className="content">
            <span>Created on</span>
            <span>{user.created_date}</span>
          </div>
        </div>
        <div className="box">
          <Person3Icon />

          <div className="content">
            <span>Languages</span>
            <span>English</span>
          </div>
        </div>
      </div>
      <marquee> Welcome to My  meta CSP Page </marquee>
      <div className="midcontent-section2">
        <span>
          For General Queries-<a href="#">Click Here</a>
        </span>
        <div className="line"></div>
        <div className="certificate-content">
          <span>Assessment Completed:10</span>
          <div className="box certificate-box">
            <InsertDriveFileIcon />

            <div className="content">
              <span>Download certificate</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midcontent;
