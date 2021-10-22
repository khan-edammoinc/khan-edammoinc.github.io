import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import RnD from "./pages/RnD/RnD";
import Services from "./pages/Services/Services";
import ServicesPredictiveModeling from "./pages/Services/ServicesPredictiveModeling";
import ServicesAcceleratedBusinessIntelligence from "./pages/Services/ServicesAcceleratedBusinessIntelligence";
import ServicesPartnerProductDevelopment from "./pages/Services/ServicesPartnerProductDevelopment";
import ServicesAiEnabledAutomation from "./pages/Services/ServicesAiEnabledAutomation";
import Industries from "./pages/Industries/Industries";
import IndustriesHealthcare from "./pages/Industries/IndustriesHealthcare";
import CaseStudiesHumanResourceTech from "./pages/CaseStudies/CaseStudiesHumanResourceTech";
import AboutUs from "./pages/AboutUs/AboutUs";
import GetStarted from "./pages/GetStarted/GetStarted";
import Careers from "./pages/Careers/Careers";
import CareersDeveloper from "./pages/Careers/CareersDeveloper";

function Router() {
  return (
    <BrowserRouter>
      <Nav/>

      <Switch>

        <Route path="/careers/developer">
          <CareersDeveloper/>
        </Route>

        <Route path="/careers">
          <Careers/>
        </Route>

        <Route path="/aboutus">
          <AboutUs/>
        </Route>

        <Route path="/casestudies/humanresourcetech">
          <CaseStudiesHumanResourceTech/>
        </Route>

        <Route path="/casestudies">
          {/**NOT USED */}
          Case Studies
        </Route>
        
        <Route path="/industries/healthcare">
          <IndustriesHealthcare/>
        </Route>

        <Route path="/industries">
          <Industries/>
        </Route>

        <Route path="/services/aienabledautomation">
          <ServicesAiEnabledAutomation/>
        </Route>

        <Route path="/services/partnerproductdevelopment">
          <ServicesPartnerProductDevelopment/>
        </Route>

        <Route path="/services/acceleratedbusinessintelligence">
          <ServicesAcceleratedBusinessIntelligence/>
        </Route>

        <Route path="/services/predictivemodeling">
          <ServicesPredictiveModeling/>
        </Route>

        <Route path="/services">
          <Services/>
        </Route>

        <Route path="/rnd">
          <RnD/>
        </Route>

        <Route path="/getstarted">
          <GetStarted/>
        </Route>
        <Route path="/contactus">
          <GetStarted/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
