import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegistrationForm from "./Pages/RegistrationForm";
import LoginForm from "./Pages/LoginForm";
import AdminPanel from "./Pages/AdminSection/AdminPanel";
import AboutUS from "./Pages/AboutUS";
import Home from "./Pages/Home";

import Services from "./Pages/Services";
import Assesment from "./Pages/AdminSection/Assesment";
import Contactus from "./Pages/Contactus";
import DigitalMitraEnrollment from "./Pages/DigitalMitraEnrollment";
import ServiceAeps from "./Components/ServiceAeps";
import Services_Egov from "./Pages/Services_Egov";
import ServicesPayment from "./Pages/ServicesPayment";
import ServicesInsurance from "./Pages/ServicesInsurance";
import ServicesEarn from "./Pages/ServicesEarn";
import ServicesEntertain from "./Pages/ServicesEntertain";
import ServicesTour from "./Pages/ServicesTour";
import ServicesLearning from "./Pages/ServicesLearning";
import Refund from "./policy/Refund";
import Terms from "./policy/Terms";
import Privacy from "./policy/Privacy";
import ServiceCashdeposit from "./Components/ServiceCashdeposit";
import ServiceAccount from "./Components/ServiceAccount";
import ServiceMicroatm from "./Components/ServiceMicroatm";
import SrvPan from "./Components/SpanCard";
import SrvIncomeTax from "./Components/Sincome";
import SrvUmang from "./Components/SUmang";
import SrvMokendra from "./Components/Smokendra";
import Srvestamping from "./Components/Sestamp";
import Egovern from "./Components/Egovern";
import Sbbps from "./Components/Sbbps";
import Sgp from "./Components/Sgp";
import Slic from "./Components/Slic";
import Smobile from "./Components/Smobile";
import SgeneralIns from "./Components/SgeneralIns";
import ShealthIns from "./Components/ShealthIns";
import Sirctc from "./Components/Sirctc";
import Sbus from "./Components/Sbus";
import SFlight from "./Components/SFlight";
import SdigitalBajar from "./Components/SdigitalBajar";
import Initialtemplates from "./Pages/AdminSection/TestSeries/Initialtemplates";
import Modulepaper from "./Pages/AdminSection/TestSeries/Modulepaper";
const App = () => {
  const [user, setUser] = useState(null);
  const [assesmentUser, setassesmentUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/loginUserPannel" element={<LoginForm setUser={setUser} />} />
        <Route path="/admin" element={user ? <AdminPanel user={user} /> : <Navigate to="/login" />} />
        <Route path="/initialtestStart" element={user ? <Initialtemplates user={user} /> : <Navigate to="/login" />} />
        <Route
          path="/ModulePaperTest"
          element={
            user ? (
              <Modulepaper setassesmentUser={setassesmentUser} user={user}/> 
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/userPannel-assesments" element={user ? <Assesment user={user} assesmentUser={assesmentUser} /> : <Navigate to="/login" />} />
        <Route path="/userPannel-dashboard" element={user ? <AdminPanel user={user} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/Contact" element={<Contactus />} />

        <Route path="/aeps-page" element={<ServiceAeps />} />
        <Route path="/Cashdeposit-page" element={<ServiceCashdeposit />} />
        <Route path="/Accountopen-page" element={<ServiceAccount />} />
        <Route path="/microAtm-page" element={<ServiceMicroatm />} />
        <Route path="/pan-page" element={<SrvPan />} />
        <Route path="/income-page" element={<SrvIncomeTax />} />
        <Route path="/umang-page" element={<SrvUmang />} />
        <Route path="/moseba-page" element={<SrvMokendra />} />
        <Route path="/estamp-page" element={<Srvestamping />} />
        <Route path="/egovern-page" element={<Egovern />} />

        <Route path="/bbps-page" element={<Sbbps />} />
        <Route path="/gp-page" element={<Sgp />} />
        <Route path="/lic-page" element={<Slic />} />
        <Route path="/recharge-page" element={<Smobile />} />

        <Route path="/generalInsurance-page" element={<SgeneralIns />} />
        <Route path="/healthInsurance-page" element={<ShealthIns />} />

        <Route path="/irctc-page" element={<Sirctc />} />
        <Route path="/bus-page" element={<Sbus />} />
        <Route path="/plane-page" element={<SFlight />} />

        <Route path="/digitalBazar-page" element={<SdigitalBajar />} />
      
        <Route path="/Service_banking" element={<Services />} />
        <Route path="/Service_egovern" element={<Services_Egov />} />
        <Route path="/Service_Payment" element={<ServicesPayment />} />
        <Route path="/Service_Insurance" element={<ServicesInsurance />} />
        <Route path="/Service_learning" element={<ServicesLearning />} />
        <Route path="/Service_tour" element={<ServicesTour />} />
        <Route path="/Service_entertain" element={<ServicesEntertain />} />
        <Route path="/Service_earn" element={<ServicesEarn />} />

        <Route path="/refund-policy" element={<Refund/>} />
        <Route path="/privacy-policy" element={<Privacy/>} />
        <Route path="/terms-condition" element={<Terms/>} />


        <Route path="/enrollment-registration" element={<DigitalMitraEnrollment />} />
    </Routes>
    </Router>
  );
};

export default App;
