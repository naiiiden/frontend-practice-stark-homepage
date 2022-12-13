import "./style/general.css";
import Header from "./components/Header";
import Video from "./components/Video";
import Customers from "./components/Customers";
import Download from "./components/Download";
import FeaturesMainPage from "./components/FeaturesMainPage";
import FeaturesMac from "./components/FeaturesMac";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";
import Features2 from "./components/Features2";
import Footer from "./components/Footer";

import Nav from "./components/Nav";

import { Routes, Route } from "react-router-dom";

// hero image
import mac from "./assets/images_header/mac.webp";
import figma from "./assets/images_header/figma.webp";
import sketch from "./assets/images_header/sketch.webp";
import xd from "./assets/images_header/xd.webp";
import chrome from "./assets/images_header/chrome.webp";
import edge from "./assets/images_header/chrome.webp";
import safari from "./assets/images_header/safari.webp";
import arc from "./assets/images_header/arc.webp";
import brave from "./assets/images_header/brave.webp";
import FeaturesNotMacNotMain from "./components/FeaturesNotMacNotMain";
import PurpleLink from "./components/PurpleLink";

// pages
import Main from "./pages/Main";
import Mac from "./pages/Mac";
import Figma from "./pages/Figma";
import Sketch from "./pages/Sketch";
import Adobe from "./pages/Adobe";

const App = () => {
  return (
    <div style={{"overflow": "hidden"}}>
        <Routes>
          <Route path="/" element={
            <Main/>
          }/>
          <Route path="/mac" element={
            <Mac/>
          }/>
          <Route path="/figma" element={
            <Figma/>
          }/>
          <Route path="/sketch" element={
            <Sketch/>
          }/>
          <Route path="/adobe-xd" element={
            <Adobe/>
          }/>
          <Route path="/chrome" element={
            <>
              <Header
                heroImage={chrome}
                pIntro="Work with Stark in your favorite browser" 
                h1Text="Stark for Chrome"
                pText="Make every project accessible from the start. Stark for Chrome keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
              />
              <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for Chrome"
                  href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                />
                <Features2/>
              </main>
            </>
          }/>
          <Route path="/edge" element={
            <>
              <Header
                heroImage={edge}
                pIntro="Work with Stark in your favorite browser" 
                h1Text="Stark for Edge"
                pText="Make every project accessible from the start. Stark for Edge keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
              />
              <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for Edge"
                  href="https://microsoftedge.microsoft.com/addons/detail/stark/idpodoagbkllmpdjdepbmlefgiblmnhl"
                />
                <Features2/>
              </main>
            </>
          }/>
          <Route path="/safari" element={
            <>
              <Header
                heroImage={safari}
                pIntro="Work with Stark in your favorite browser" 
                h1Text="Stark for Safari"
                pText="Make every project accessible from the start. Stark for Safari keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
              />
              <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for Safari"
                  href="https://apps.apple.com/us/app/stark-for-safari/id6444031666"
                />
                <Features2/>
              </main>
            </>
          }/>
          <Route path="/arc" element={
            <>
              <Header
                heroImage={arc}
                pIntro="Work with Stark in your favorite browser" 
                h1Text="Stark for Arc"
                pText="Make every project accessible from the start. Stark for Arc keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record tim"
              />
              <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for Arc"
                  href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                />
                <Features2/>
              </main>
            </>
          }/>
          <Route path="/brave" element={
            <>
              <Header 
                heroImage={brave}
                pIntro="Work with Stark in your favorite browser"
                h1Text="Stark for Brave"
                pText="Make every project accessible from the start. Stark for Brave keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
              />
              <main>
                <Video/>
                <Customers/>
                <FeaturesNotMacNotMain/>
                <CallToAction/>
                <GetStarted
                  linkText="Download Stark for Brave"
                  href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                />
                <Features2/>
              </main>
            </>
          }/>
          <Route path="*" element={
            <>
              <header className="header-transparent">
                <Nav/>
              </header>
              <main className="error-page">
                <p className="uppercase">404 Error. Whoops.</p>
                <h1>Hmm. That didn't work.</h1>
                <p className="desc">Maybe the link doesn’t exist. Or maybe we just broke it? Hopefully we can take you where you want to go though.</p>
                <div className="links-wrapper">
                  <PurpleLink href="" text="Go to Support Center"/>
                  <a href="" className="contact-us-link">Contact us</a>
                </div>
              </main>
            </>
          }/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App;