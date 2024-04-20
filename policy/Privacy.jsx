import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Privacy = () => {
  return (
    <div>
      <Navtop />
      <Navbar />
      <div className="Privacy" style={{"margin":"35px 161px", "textAlign":"justify"}}>
        <h3> Privacy Policy </h3>
        <p>
          This Privacy Policy is an electronic record in the form of an
          Electronic Contract. This policy explains how the data on personal
          information is collected, stored and used when you visit the Common
          Service Centers (MeraCSC Point) Portal, to ensure that we provide
          relevant and timely services to you and improve your experience of the
          website. All the users are advised to read this Privacy Policy
          carefully. By visiting CSCs website you expressly give us consent to
          use & disclose your personal information in accordance with the
          Policy. Note: This privacy policy is a legally binding document
          between you and Common Service Centers (MeraCSC Point). Our privacy
          policy may change at any time without prior notification. To make sure
          that you are aware of any changes, kindly review the policy
          periodically.{" "}
        </p>
        <h3>General</h3>{" "}
        <p>
          At Common Service Centers (MeraCSC Point), the privacy of our
          visitors/customers is of extreme importance to us. This privacy policy
          document outlines the types of personal information is received and
          collected by Common Service Centers (MeraCSC Point) and how it is
          used. We will not sell, share or rent your personal information to any
          3rd party or use your email address/mobile number for unsolicited
          emails and/or SMS. Any emails and/or SMS sent by Common Service
          Centers (MeraCSC Point) will only be in connection with the provision
          of agreed services & products and this Privacy Policy. Periodically,
          we may share newsletters and general statistical information about
          Common Service Centers (MeraCSC Point) & its users. We reserve the
          right to communicate your personal information to any third party that
          makes a legally-compliant request for its disclosure.
        </p>{" "}
        <h3>Personal Information</h3>{" "}
        <p>
          Personal Information means and includes all information that can be
          linked to a specific individual or to identify any individual, such as
          name, address, mailing address, telephone number, email ID, credit
          card number, cardholder name, card expiration date, information about
          your mobile phone, DTH service, data card, electricity connection and
          any details that may have been voluntarily provide by the user in
          connection with availing any of the services on Common Service Centers
          (MeraCSC Point). We do not sell or share any personally identifiable
          information volunteered on this portal to any third party
          (public/private). Any information provided to this portal will be
          protected from loss, misuse, unauthorized access or disclosure,
          alteration, or destruction. When you browse through Common Service
          Centers (MeraCSC Point), we may collect information regarding the
          domain and host from which you access the internet, the Internet
          Protocol [IP] address of the computer or Internet service provider
          [ISP] you are using, and anonymous site statistical data.
        </p>{" "}
        <h3>Use Of Personal Information</h3>{" "}
        <p>
          We use personal information to provide you with services & products
          you explicitly requested for, to resolve disputes, troubleshoot
          concerns, help promote safe services, collect money, measure consumer
          interest in our services, inform you about offers, products, services,
          updates, customize your experience, detect & protect us against error,
          fraud and other criminal activity, enforce our terms and conditions,
          etc. We also use your contact information to send you important
          communication and information related to Common Service Centers
          (MeraCSC Point).
        </p>{" "}
        <h3>Cookies</h3>{" "}
        <p>
          A "cookie" is a small piece of information stored by a web server on a
          web browser so it can be later read back from that browser. We and our
          partners use various technologies to collect and store information
          when you visit Common Service Centers (MeraCSC Point) portal, and this
          may include using cookies or similar technologies to identify your
          browser. No personal information will be collected via cookies and
          other tracking technology; however, if you previously provided
          personally identifiable information, cookies may be tied to such
          information. Aggregate cookie and tracking information may be shared
          with third parties.
        </p>{" "}
        <h3> Links to Other Sites</h3>{" "}
        <p>
          Our site links to other websites that may collect personally
          identifiable information about you. Common Service Centers (MeraCSC
          Point) is not responsible for the privacy practices or the content of
          those linked websites.
        </p>{" "}
        <h3>Security</h3>{" "}
        <p>
          Common Service Centers (MeraCSC Point) has stringent security measures
          in place to protect the loss, misuse, and alteration of the
          information under our control. Whenever you change or access your
          account information, we offer the use of a secure server. Once your
          information is in our possession we adhere to strict security
          guidelines, protecting it against unauthorized access. We gather
          certain information about the Registered User, such as Internet
          protocol (IP) addresses, domain name, browser type, operating system,
          the date and time of the visit and the pages visited. We make no
          attempt to link these addresses with the identity of individuals
          visiting our site unless an attempt to damage the site has been
          detected.
        </p>{" "}
        <h3>Consent</h3>{" "}
        <p>
          By continuing to use this website, you confirm that you have read,
          understood and agreed to this Privacy Policy and consent to us using
          your personal information as described.
        </p>

        <h2> Refund Policy</h2>
        <ol>
          <li>
            All sales/ Money Transfer / Bill Payments / Recharges are final with
            no refund or exchange permitted.
          </li>
          <li>
            Customer / Agent are responsible for the mobile number, DTH account
            number, utility identification number, bank account number and
            details for Purchases / Money Transfer / Bill Payments / Recharges
            and all charges that result from those Purchases / Money Transfer /
            Bill Payments / Recharges.
          </li>
          <li>
            DIITEC Innovations Pvt. Ltd. is not responsible for any Purchase /
            Money Transfer / Bill Payment / Recharges for an incorrect mobile
            number, DTH account number, utility identification number, and bank
            account number.
          </li>
          <li>
            However, if in a transaction performed by Customer on the Site,
            money has been charged to their card or bank account or MeraCSC
            Point Wallet and a Purchase / Money Transfer / Bill Payments /
            Recharges are not successful within 72 hours of their completion of
            the transaction, then Customer may inform us by sending an email to
            our customer services email address mentioned on the Contact Us
            page.
          </li>
          <li>
            Please include in the email the following details - the mobile
            number / DTH account number / Utility identification number / bank
            account, operator name, Transaction value, Transaction date and
            Order Number. DIITEC Innovations Pvt. Ltd. shall investigate the
            incident and if it is found that money was indeed charged to
            Customer's card or bank account or MeraCSC Point Wallet without
            delivery of the Recharge then Customer will be refunded the money
            within 21 working days from the date of receipt of their email. All
            Refunds will be credited to your Semi Closed Wallet.
          </li>
        </ol>

      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
