import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenq, setIsOpenq] = useState(false);
  const [isOpensrvs, setIsOpenSrvs] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);

  const toggleNav = () => {
    setIsOpenq(!isOpenq);
  };

  const toggleServices = () => {
    setIsOpenSrvs(!isOpensrvs);
  };

  const toggleRegistration = () => {
    setIsOpenReg(!isOpenReg);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpenReg(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsOpenSrvs(false);
    }
    // if (dropdownRef4.current && !dropdownRef4.current.contains(event.target)) {
    //   setIsOpenReg(false);
    // }
    // if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
    //   setIsOpenSrvs(false);
    // }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-main">
      <div className="logo-img">
        <img src={logo} alt="Logo" />
      </div>

      <div className={isOpenq ? "sidebar open" : "sidebar"}>
        <div className="toggle-button" onClick={toggleNav} ref={dropdownRef3}>
          <div className={isOpenq ? "bar open" : "bar"}></div>
          <div className={isOpenq ? "bar open" : "bar"}></div>
          <div className={isOpenq ? "bar open" : "bar"}></div>
        </div>
        <ul>ASQ Q 
          <li>
            <Link to="/" onClick={toggleNav}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/AboutUS" onClick={toggleNav}>
              ABOUT US
            </Link>
          </li>
          <li onClick={toggleServices} ref={dropdownRef3}>
            <Link>
              SERVICES <ArrowDropDownIcon />
              {isOpensrvs && (
                <div className="Registration-list Services_list">
                  <Link to="/Service_banking">Banking Services</Link>
                  <Link to="/Service_egovern">E-Governance</Link>
                  <Link to="/Service_Payment">Payment Services</Link>
                  <Link to="/Service_Insurance">Insurance</Link>
                  <Link to="/Service_learning">E-learning</Link>
                  <Link to="/Service_tour">Tours & Travels</Link>
                  <Link to="/Service_entertain">Entertainment</Link>
                  <Link to="/Service_earn">Earn More</Link>
                </div>
              )}
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={toggleNav}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/Faqs-Page" onClick={toggleNav}>
              FAQs
            </Link>
          </li>
          <button className="agent-login nav-btn">VLE LOGIN</button>
          <div className="Registration">
            <button
              className="Registration-login nav-btn"
              onClick={toggleRegistration}
              ref={dropdownRef4}
            >
              REGISTRATION <ArrowDropDownIcon />
            </button>
            {isOpenReg && (
              <div className="Registration-list">
                <Link to="/enrollment-registration">
                  Digital Mitr-Entrepreneurship Training Course Enrollment
                  (DM-ETC)
                </Link>
                <Link to="/a">Digital Mitr Registration</Link>
              </div>
            )}
          </div>
        </ul>
      </div>

      <ul className="navbar-items">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/AboutUS">ABOUT US</Link>
        </li>
        <li onClick={toggleServices} ref={dropdownRef2}>
          <Link>
            SERVICES <ArrowDropDownIcon />
            {isOpensrvs && (
              <div className="Registration-list Services_list">
                <Link to="/Service_banking">Banking Services</Link>
                <Link to="/Service_egovern">E-Governance</Link>
                <Link to="/Service_Payment">Payment Services</Link>
                <Link to="/Service_Insurance">Insurance</Link>
                <Link to="/Service_learning">E-learning</Link>
                <Link to="/Service_tour">Tours & Travels</Link>
                <Link to="/Service_entertain">Entertainment</Link>
                <Link to="/Service_earn">Earn More</Link>
              </div>
            )}
          </Link>
        </li>
        <li>
          <Link to="/Contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/Faqs-Page">FAQs</Link>
        </li>
        <button className="agent-login nav-btn">VLE LOGIN</button>
        <div className="Registration">
          <button
            className="Registration-login nav-btn"
            onClick={toggleRegistration}
            ref={dropdownRef}
          >
            REGISTRATION <ArrowDropDownIcon />
          </button>
          {isOpenReg && (
            <div className="Registration-list">
              <Link to="/enrollment-registration">
                Digital Mitr-Entrepreneurship Training Course Enrollment
                (DM-ETC)
              </Link>
              <Link to="/a">Digital Mitr Registration</Link>
            </div>
          )}
        </div>
      </ul>

      <div className="toggle-button" onClick={toggleNav} ref={dropdownRef3}>
        <div className={isOpenq ? "bar open" : "bar"}></div>
        <div className={isOpenq ? "bar open" : "bar"}></div>
        <div className={isOpenq ? "bar open" : "bar"}></div>
      </div>
    </div>
  );
};

export default Navbar;
