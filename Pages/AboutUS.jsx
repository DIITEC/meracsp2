import React from "react";
import "./AboutUS.css";
import Navbar from "../Components/Navbar";
import Navtop from "../Components/Navtop";
import Footer from "../Components/Footer";
import clgrl from "../Images/clgrl.webp";
import clgrl2 from "../Images/clggrl2.webp";
import vijaysirprof from "../Images/vijaysirprof.JPG";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const AboutUS = () => {
  return (
    <div className="AboutUs">
      <Navtop />
      <Navbar />
      <div className="about-section-part">
        <p>About Us</p>
        <p>
          Whether you are a retailer, distributor, individual or self help
          group, we have smart solutions for everyone.
        </p>
        <p>
          We are a leading banking service solution provider based in India . We
          currently have more than 60+ services like prepaid recharges, domestic
          money transfer, postpaid, landline, electricity, gas, water,
          broadband, insurance, fast tag, Travel, irctc, taxation and others. In
          a very short space of time, as meracsppoint. we have experienced rapid
          growth and have established our company as one of the leading player
          in the indian market. We have experienced unprecedented growth,
          significantly expanding its retail base and channel partner. Over the
          past year, we have continued to develop and improve in a number of
          ways. Additionally, we’ve focused attention on customer service to
          ensuring customer satisfaction and a new designed to ensure the easy
          to adopt, easy to use this influences our product development roadmap
          going forward. For us, these developments will provide the perfect
          launch pad for our business as we continue to grow and innovate
          enabling our channel partners to deliver better services to their
          customers and End users.
        </p>
        <p>
          We are a one stop destination for all online services like Mobile, DTH
          and Data Card Recharges, Postpaid Bill Payment, Electricty Bill
          Payment, Landline Bill Payment, Bus Booking, Flight Booking,
          Entertainment, Remittance / Money-transfers, White Label Recharge
          Websites and Software, Recharge and DTH Direct Operator API Provider
          and Many More.
        </p>
        <p>
          We help to connect the rural, urban and semi-urban towns and villages
          in India through its portal for all financial and non-financial
          services. Our strength in the fields of service, distribution and
          payment processing enables the centers to provide various online
          services at ease and economically. In today’s sophisticated world,
          time is a huge constraint. We make every minute of yours, count. Avail
          major services online, no more waiting in long queues to pay your
          mobile, DTH ,gas, electricity and other bills, Pay at your convenience
          through our portal in a nearby center. Also avail mobile and DTH
          recharge offers online.
        </p>
        <p>
          Our aim Is to provide consumers this convenience by creating a
          franchise network in every village, town and city. These franchisees
          are equipped with user friendly terminals, which are connected to the
          service provider's servers and execute transactions on a real-time
          basis. We have Agreements with service provider's and is authorized to
          issue legally valid reservations and receipts to consumers.
        </p>
      </div>

      <div className="OurTeamBox">
        <div className="OurTeambox-top">
          <span>Super Team</span>
          <p>Meet Our Super Team</p>
          <p>
            We're a cross disciplinary team that love to create great
            experiences.
          </p>
        </div>
        <div className="ourTeamImagesBoxes">
          <div className="Ourteam-ImagesBox">
            <img src={clgrl2} />
            <p>HAYA KHAN</p>
            <span>Banking & Insurance</span>
            <div className="iconOurteam">
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <LinkedInIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <XIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <InstagramIcon/>
              </a>
            </div>
          </div>
          <div className="Ourteam-ImagesBox">
            <img src={clgrl2} />
            <p>JYOTI PANDEY</p>
            <span>SHG Department</span>
            <div className="iconOurteam">
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <LinkedInIcon/>
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <XIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="Ourteam-ImagesBox">
            <img src={clgrl2} />
            <p>ARSHIYA KHAN </p>
            <span>#####</span>
            <div className="iconOurteam">
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <LinkedInIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <XIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <InstagramIcon/>
              </a>
            </div>
          </div>
          <div className="Ourteam-ImagesBox">
            <img src={clgrl2} />
            <p>PRIYA SHUKLA</p>
            <span>#####</span>
            <div className="iconOurteam">
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <LinkedInIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <XIcon/>
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="Ourteam-ImagesBox">
            <img src={clgrl} />
            <p>RATAN TIWARI</p>
            <span>E-Commerce </span>
            <div className="iconOurteam">
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <LinkedInIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <XIcon/>
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="Ourteam-ImagesBox">
            <img src={clgrl} />
            <p>SUSHIL KUMAR</p>
            <span>Digital Signature</span>
            <div className="iconOurteam">
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <LinkedInIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <XIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="Ourteam-ImagesBox">
            <img src={clgrl} />
            <p>AAKASH</p>
            <span>Technical Head</span>
            <div className="iconOurteam">
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <LinkedInIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <XIcon />
              </a>
              <a href="https://dribbble.com/shots/21086578-UI_Snap-Our_Team-UI-Design">
                <InstagramIcon />
              </a>
            </div>
          </div>
         
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUS;
