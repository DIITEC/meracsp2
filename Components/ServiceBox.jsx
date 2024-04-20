import React from "react";
import banksrvs from "../Images/Banksrvs.jpg";
import Aepssrvsimg from "../Images/aepsadharsrvs.png";
import microAtm from "../Images/MicroATM1.png";
import accountOpening from "../Images/banking-Commercial.webp";
import cashDeposit from "../Images/cashDeposit.png";
import "./ServiceBox.css";
import { Link } from "react-router-dom";
const ServiceBox = ({}) => {
  return (
    <div>
      <div className="servicesMainBox">
        <div className="cardServiceSec1">
          <div className="contents1">
            <span>Banking Services</span>
            <p>
              No working capital required. MeraCSP offer uninterrupted banking
              services like cash withdrawal, money transfer, cash deposits,
              savings, insurance and loan from your shop.
            </p>
          </div>
          <div className="imgsec1">
            <img src={banksrvs} alt="" />
          </div>
        </div>
        <div className="ServiceDetails1">
          <div className="HeaderDetails">
            <span>Services </span>
            <span>
              Become the Standard for Trusted Banking Services in Your Area
            </span>
          </div>
          <div className="servicedetailSec1">
            <div className="srvsBoxMain">
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Aeps</span>
                  <span>
                    It's a payment service enabling bank customers to utilize
                    Aadhaar as their identity to access Aadhaar-enabled bank
                    accounts, facilitating basic banking transactions such as
                    balance inquiries and cash withdrawals through a Business
                    Correspondent.
                  </span>
                  <Link to='/aeps-page'>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={Aepssrvsimg} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Micro ATM</span>
                  <span>
                    Access cash withdrawal services using debit/Credit cards
                    over 100+ banks.
                  </span>
                  <Link to='/microAtm-page'>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={microAtm} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Account Opening </span>
                  <span>
                    Savings Current account opening services are now available
                    4+ Banks on MeraCSP portal. Digital Mitr/VLE can help avail
                    there customer to open there account attractive commission
                    on there account opening.
                  </span>
                  <Link to='/Accountopen-page'>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={accountOpening} alt="" />
                </div>
              </div>
              <div className="srvsbox">
                <div className="srvsSec1det">
                  <span>Cash Deposit </span>
                  <span>
                    MeraCSP enabling partner merchants to provide banking
                    services to their customers in their local communities.
                    Customers will visit the merchant outlet to avail of AePS
                    cash deposit services.
                  </span>
                  <Link to='/Cashdeposit-page'>Learn More</Link>
                </div>
                <div className="srvsSec2det">
                  <img src={cashDeposit} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servicebuttonSec">
          <Link to="/register">Become a Digital Mitr</Link>
          <Link>Income Calculator</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
