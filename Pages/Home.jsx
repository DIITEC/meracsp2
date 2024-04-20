import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import slider1 from "../Images/slider1.png";
import slider from "../Images/slider.png";
import Footer from "../Components/Footer";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navtop from "../Components/Navtop";
import callicon from "../Images/callIcon.png";
import clgrl from "../Images/clgrl.jpg";
import im1 from "../Images/client-1.png";
import im2 from "../Images/client-3.png";
import im3 from "../Images/client-4.png";
import im4 from "../Images/digital-india.png";
import im5 from "../Images/client-6.png";
import im6 from "../Images/client-7.png";
import im7 from "../Images/SideBar.png";
import Iframe from "react-iframe";
const responsivecar = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
const responsive2 = {
  0: { items: 2 },
  568: { items: 4 },
  1024: { items: 4 },
};
const responsive3 = {
  0: { items: 4 },
  568: { items: 7 },
  1024: { items: 7 },
};

const partnersCompany = [
  <img src={im1} alt="" srcset="" />,
  <img src={im2} alt="" srcset="" />,
  <img src={im3} alt="" srcset="" />,
  <img src={im4} alt="" srcset="" />,
  <img src={im7} alt="" srcset="" style={{ width: "100px" }} />,
  <img
    src={im5}
    alt=""
    srcset=""
    style={{ width: "131px", marginTop: "15px" }}
  />,
  <img src={im6} alt="" srcset="" />,
];
const service_items = [
  <div className="scrolling-bar">
    <div className="box-scroll">
      <div className="box-scrolling">
        <p>Pancard Services</p>
        <p>
          UTI PAN Services (Government of India) allows for seamlesss,100%
          reliable and secure transactions and quick fullfillment of the
          customers...
        </p>
      </div>
    </div>
  </div>,
  <div className="scrolling-bar">
    <div className="box-scroll">
      <div className="box-scrolling">
        <p>General Insurance</p>
        <p>
          Welcome an IRDAI authorised Agent and offers Insurance product from
          leading companies with Settlement guaranteed..
        </p>
      </div>
    </div>
  </div>,
  <div className="scrolling-bar">
    <div className="box-scroll">
      <div className="box-scrolling">
        <p>AEPS Services</p>
        <p>
          Aadhaar Enabled Payment Service or AEPS, is an Aadhaar based payment
          solution which empowers bank users to carry out financial...
        </p>
      </div>
    </div>
  </div>,
  <div className="scrolling-bar">
    <div className="box-scroll">
      <div className="box-scrolling">
        <p>Money Transfer -DMT</p>
        <p>
          Domestic Money Trasfer Business Opportunity for all its retailers to
          assist customers who want to send money to their near...
        </p>
      </div>
    </div>
  </div>,
  <div className="scrolling-bar">
    <div className="box-scroll">
      <div className="box-scrolling">
        <p>Pancard Services</p>
        <p>
          UTI PAN Services (Government of India) allows for seamlesss,100%
          reliable and secure transactions and quick fullfillment of the
          customers...
        </p>
      </div>
    </div>
  </div>,
  <div className="scrolling-bar">
    <div className="box-scroll">
      <div className="box-scrolling">
        <p>General Insurance</p>
        <p>
          Welcome an IRDAI authorised Agent and offers Insurance product from
          leading companies with Settlement guaranteed..
        </p>
      </div>
    </div>
  </div>,
  <div className="scrolling-bar">
    <div className="box-scroll">
      <div className="box-scrolling">
        <p>AEPS Services</p>
        <p>
          Aadhaar Enabled Payment Service or AEPS, is an Aadhaar based payment
          solution which empowers bank users to carry out financial...
        </p>
      </div>
    </div>
  </div>,
  <div className="scrolling-bar">
    <div className="box-scroll">
      <div className="box-scrolling">
        <p>Money Transfer -DMT</p>
        <p>
          Domestic Money Trasfer Business Opportunity for all its retailers to
          assist customers who want to send money to their near...
        </p>
      </div>
    </div>
  </div>,
];

const review_items = [
  <div className="Help-Businessman-box1">
    {/* <img src="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg"></img> */}
    <Iframe
      url="https://www.youtube.com/embed/05md0quCvmM"
      width="min-content"
      height="min-content"
      id=""
      className=""
      display="block"
      position="relative"
    />
    <div className="Help-Businessman-side2">
      {/* <p>
        sahaj has made people aware about digitized services and now has given
        me enough scope to prove myself from a home maker to a business women
      </p> */}
      <hr />
      <div className="Help-Businessman-side2-box-data1">
        {/* <span>Susmita Shukla, Aman Roy</span> */}
        <span>MeraCSP | Digital Mitr</span>
      </div>
    </div>
  </div>,
  <div className="Help-Businessman-box1">
    {/* <img src="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg"></img> */}
    <Iframe
      url="https://www.youtube.com/embed/05md0quCvmM"
      width="min-content"
      height="min-content"
      id=""
      className=""
      display="block"
      position="relative"
    />
    <div className="Help-Businessman-side2">
      {/* <p>
        sahaj has made people aware about digitized services and now has given
        me enough scope to prove myself from a home maker to a business women
      </p> */}
      <hr />
      <div className="Help-Businessman-side2-box-data1">
        {/* <span>Susmita Shukla, Aman Roy</span> */}
        <span>MeraCSP | Digital Mitr</span>
      </div>
    </div>
  </div>,
  <div className="Help-Businessman-box1">
    {/* <img src="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg"></img> */}
    <Iframe
      url="https://www.youtube.com/embed/05md0quCvmM"
      width="min-content"
      height="min-content"
      id=""
      className=""
      display="block"
      position="relative"
    />
    <div className="Help-Businessman-side2">
      {/* <p>
        sahaj has made people aware about digitized services and now has given
        me enough scope to prove myself from a home maker to a business women
      </p> */}
      <hr />
      <div className="Help-Businessman-side2-box-data1">
        {/* <span>Susmita Shukla, Aman Roy</span> */}
        <span>MeraCSP | Digital Mitr</span>
      </div>
    </div>
  </div>,
  <div className="Help-Businessman-box1">
    {/* <img src="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg"></img> */}
    <Iframe
      url="https://www.youtube.com/embed/05md0quCvmM"
      width="min-content"
      height="min-content"
      id=""
      className=""
      display="block"
      position="relative"
    />
    <div className="Help-Businessman-side2">
      {/* <p>
        sahaj has made people aware about digitized services and now has given
        me enough scope to prove myself from a home maker to a business women
      </p> */}
      <hr />
      <div className="Help-Businessman-side2-box-data1">
        {/* <span>Susmita Shukla, Aman Roy</span> */}
        <span>MeraCSP | Digital Mitr</span>
      </div>
    </div>
  </div>,
  <div className="Help-Businessman-box1">
    {/* <img src="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg"></img> */}
    <Iframe
      url="https://www.youtube.com/embed/05md0quCvmM"
      width="min-content"
      height="min-content"
      id=""
      className=""
      display="block"
      position="relative"
    />
    <div className="Help-Businessman-side2">
      {/* <p>
        sahaj has made people aware about digitized services and now has given
        me enough scope to prove myself from a home maker to a business women
      </p> */}
      <hr />
      <div className="Help-Businessman-side2-box-data1">
        {/* <span>Susmita Shukla, Aman Roy</span> */}
        <span>MeraCSP | Digital Mitr</span>
      </div>
    </div>
  </div>,
  <div className="Help-Businessman-box1">
    {/* <img src="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg"></img> */}
    <Iframe
      url="https://www.youtube.com/embed/05md0quCvmM"
      width="min-content"
      height="min-content"
      id=""
      className=""
      display="block"
      position="relative"
    />
    <div className="Help-Businessman-side2">
      {/* <p>
        sahaj has made people aware about digitized services and now has given
        me enough scope to prove myself from a home maker to a business women
      </p> */}
      <hr />
      <div className="Help-Businessman-side2-box-data1">
        {/* <span>Susmita Shukla, Aman Roy</span> */}
        <span>MeraCSP | Digital Mitr</span>
      </div>
    </div>
  </div>,

];
const Home = () => {
  return (
    <div className="Home">
      <Navtop />
      <Navbar />
      <div className="home-Notice">
        <marquee>
          प्रिय डिजिटल मित्र, सेवाओं के उपयोग में आपको हो रही असुविधा के लिए हमे
          खेद है<div className="purnLine"></div> हम जल्द ही सभी सेवाओं को अपडेट
          कर लेंगे<div className="purnLine"></div> कृपया धैर्य बनाये रखे
          <div className="purnLine"></div> धन्यवाद
        </marquee>
      </div>
      <div className="crousel-main">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={slider1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slider} alt="Second slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* <Carousel
         showArrows={false}
         interval={3500}
         dynamicHeight={false}
         stopOnHoveringScroll={false}
         infiniteLoop={true}
         showStatus={false}
         transitionTime={500}
         showThumbs={false}
         showIndicators={true}
         swipeable={true}
         emulateTouchStart={true}
         autoPlay={true}
        >
     
          <div>
            <img src={slider} />
          </div>
          <div>
            <img src={slider1} />
          </div>
        </Carousel> */}
      </div>
      <div className="section1">
        <p className="section1-Heading">
          <span className="section1-Heading-1">Why</span> choose Us
        </p>
        <p className="section1-text">
          Choosing the right Digital Engage is critical to your success as a
          modern business owner. There are a plethora of options available to
          small businesses in the India, so it’s crucial to work with a company
          that understands your needs. At Digital Engage, we draw on years of
          experience in digital marketing to help our clients achieve their
          commercial goals
        </p>
        <ul>
          <li>We value our clients.</li>
          <li>We have a track record of Success.</li>
          <li>We’re always available.</li>
          <li>We’re Experts our Services.</li>
        </ul>
      </div>

      <div className="awesome-Heading">
        <div className="services-awesome">
          <div className="line1"></div>
          <span>Services</span>
          <div className="line1"></div>
        </div>

        <div className="Awesome-services">
          <p>Our Awesome Services</p>
        </div>
        <div className="awesome-update">
          <AliceCarousel
            mouseTracking
            autoPlay={true}
            infinite={true}
            animationDuration={1000}
            autoPlayInterval={1000}
            items={service_items}
            responsive={responsive2}
            // disableDotsControls={true}
            disableButtonsControls={true}
          ></AliceCarousel>
        </div>
      </div>

      {/* review section */}
      <div className="Help-Businessman">
        <p>DIITEC helps Businessman to achieve more</p>
        <div className="Help-Businessman-box">
          <AliceCarousel
            mouseTracking
            autoPlay={true}
            infinite={true}
            animationDuration={2000}
            autoPlayInterval={2000}
            items={review_items}
            responsive={responsive}
            disableDotsControls={true}
            disableButtonsControls={true}
          ></AliceCarousel>
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
      <div className="contact-box">
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

      <div className="upper-line">
        <div className="linename-side1">
          <AliceCarousel
            mouseTracking
            autoPlay={true}
            infinite={true}
            animationDuration={2000}
            autoPlayInterval={2000}
            items={partnersCompany}
            responsive={responsive2}
            disableDotsControls={true}
            disableButtonsControls={true}
          ></AliceCarousel>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
