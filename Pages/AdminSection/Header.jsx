import React from "react";
import "./Header.css";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = ({user}) => {
  const [isDrop, setisDrop] = useState(false);
  return (
   
      <div className="header-box">
        <p>
        Digital Mitr – Entrepreneurship Training Course (DM-ETC) 
        </p>
        
        <div className="account-header">
        <span>Welcome:</span>
          <AccountCircleIcon/>
          <img src={user.photo} alt="" />
          
          <span>{user.username}</span>
        </div>
      </div>
  
  );
};

export default Header;
