import React from "react";
import logoDittec from "../Images/SideBar.png";
import lappy from "../Images/counseling-icon.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/tweeter-icon1.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import youtube from "../Images/youtube.png";

import digital_india from "../Images/digital-india.png";
import "./Navtop.css";
const Navtop = () => {
  return (
    <div className="Navtop">
      <div className="Navtop-box1">
        <img src={logoDittec} />
        <div className="content-1">
          <div className="imgContent-1">
            <img src={lappy} />
          </div>
          <div className="textContent-1 navtopText1">
            <span> Helpline</span>
            <span>7800770063</span>
            <span> care@diitec.in </span>
          </div>
        </div>
      </div>
      <div className="Navtop-box2">
        <div className="imgContent-2">
          <img src={facebook} />
          <img src={twitter} />
          <img src={instagram} />
          <img src={linkedin} />
          <img src={youtube} />

          <img src={digital_india} />
        </div>
        <div className="textContent-1 text22">
          <span>Office Hours: 10:00AM – 06:00PM, MONDAY -SATURDAY </span>
        </div>
      </div>
    </div>
  );
};

export default Navtop;
