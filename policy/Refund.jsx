import React from "react";
import Navtop from "../Components/Navtop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Refund = () => {
  return (
    <div>
      <Navtop />
      <Navbar />
      <div className="refund" style={{"margin":"35px 161px", "textAlign":"justify"}}>
        <h3> Refund Policy</h3>
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

export default Refund;
