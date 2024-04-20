import React from "react";
import { Link } from "react-router-dom";
import "./DigitalMitraEnrollment.css";
import DiitecLogo from '../Images/SideBar.png'
const DigitalMitraEnrollment = () => {
  return (
    <div className="DigitalMitraEnrollment">
    <img src={DiitecLogo} alt="" />
      <div className="enrollSec1">
        <div className="btns">
          <Link to="/register">Enrollment</Link>
          <Link to="/login">Login for Assesment Test</Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMitraEnrollment;
