import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import clgrl from "../Images/contact_icooo.png";
import "./Contactus.css";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmailIcon from '@mui/icons-material/Email';
import { Email } from "@material-ui/icons";
const Contactus = () => {
  return (
    <div className="Contactus">
      <Navtop />
      <Navbar />
      <div className="contact_mainBox">
        {/* content here */}
        <div className="contactTextSection">
          <div className="contact_mainBox-firstSide">
            <p>
              MeraCSP aims to provide various online services, bringing
              financial and digital inclusion in villages where there is no
              scope of online service in rural areas.
            </p>
            <p>Happy to Help all our MeraCSP</p>
            <div className="contact_mainBox-firstSide1">
              <div className="fiveTexes">
                <span><CallIcon /> +91 7800770063</span>
                <span><WhatsAppIcon /> +91 7800770063</span>
                <span><EmailIcon /> care@meracscpoint.com</span>
              </div>
              {/* <div className="sixBoxes">
                <span>Nodal Officer :</span>
                <span>Sheetal Pragati</span>
                <span>Email : nodal@meracscpoint.com.in</span>
                <span>Registered Address :</span>
                <span>
                  A 100% Indian company providing Last mile delivery of Digital
                  & Financial Services.
                </span>
              </div> */}
            </div>
          </div>
          <div className="contact_mainBox-secondSide">
            <img src={clgrl} />
          </div>
        </div>
        <div className="Contact-Us">
          <div className="contact-data">
            <div className="line1"></div>
            <span>Contact Us</span>
            <div className="line1"></div>
          </div>
          <div className="contact-heading">
            <p>Contact Us if need help!</p>
          </div>
        </div>
        <div className="contact-box contactSection-contactForm">
          <div className="Contact-boxes">
            <form>
              <div className="Get-inTouch">
                <p>Get in touch</p>
                <div className="line1"></div>
              </div>
              <div className="cForm1">
                <input type="text" name="fName" placeholder="First Name" />
                <input type="text" name="lName" placeholder="Last Name" />
              </div>
              <select name="ServiFces">
                <option value=""> Choose Services</option>
                <option value="Pancard Services">Pancard Services</option>
                <option value="General Insurance">General Insurance</option>
                <option value="AEPS Services">AEPS Services</option>
                <option value="Money Transfer -DMT">Money Transfer -DMT</option>
              </select>
              <textarea name="Messages" placeholder="Messages..." />
              <button className="FormSubmit" type="submit">
                {" "}
                <SendOutlinedIcon /> Get a Quote
              </button>
            </form>
          </div>
          <div className="Contact-boxes1">
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8451099891654!2d81.59527627404695!3d27.56731713165628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999afefc7e055f9%3A0xfadf1c8ceb5a4b25!2sDIITEC%20INNOVATIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1712750578289!5m2!1sen!2sin"
              title="Diitec Innovations Pvt. Ltd."
              aria-label="Diitec Innovation Pvt. Ltd."
              data-gtm-yt-inspected-7="true"
              data-gtm-yt-inspected-12="true"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
