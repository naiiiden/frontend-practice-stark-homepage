import "./style/general.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Video from "./components/Video";
import Customers from "./components/Customers";
import Download from "./components/Download";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";
import Features2 from "./components/Features2";
import Footer from "./components/Footer";

import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <Nav/>
        <Routes>
          <Route path="/" element={
            <Header 
              extraImages={true}
              pIntro="Introducing the all-new stark suite"
              h1Text="Supercharge Accessibility"
              pText="Tired of manually checking spreadsheets, messy handovers, and expensive retrofitting? Stark connects the tools you and your team already use in a streamlined end-to-end accessibility workflow you actually love." 
              bgColor="red" 
              bgURL="none"
            />
          }/>
          <Route path="/mac" element={
            <Header 
              pIntro="Find and fix accessibility issues in seconds"
              h1Text="Introducing Stark for Mac" 
              pText="Whether you’re working on a website, mobile app, SaaS application or anything in between, Stark for Mac helps you find and fix accessibility issues in your existing Figma and Sketch files. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
              bgColor="pink"
            />
          }/>
          <Route path="/figma" element={
            <Header 
              pIntro="Work with Stark in your favorite design tool"
              h1Text="Stark for Figma" 
              pText="Make every project accessible from the start. Stark for Figma keeps you focused on the parts of a project that need an accessibility audit. Whether you’re a team of 1 or 1,000, you have everything you need to make anything accessible from design to code."
              bgColor="green"
            />
          }/>
          <Route path="/sketch" element={
            <Header 
              pIntro="Work with Stark in your favorite design tool"
              h1Text="Stark for Sketch"
              pText="Make every project accessible from the start. Stark for Sketch keeps you focused on the parts of a project that need an accessibility audit. Whether you’re a team of 1 or 1,000, you have everything you need to make anything accessible from design to code."
            />
          }/>
          <Route path="/adobe-xd" element={
            <Header 
              pIntro="Work with Stark in your favorite design tool"
              h1Text="Stark for Adobe XD"
              pText="Make every project accessible from the start. Stark for Adobe XD keeps you focused on the parts of a project that need an accessibility audit. Whether you’re a team of 1 or 1,000, you have everything you need to make anything accessible from design to code."
            />
          }/>
          <Route path="/chrome" element={
            <Header
              pIntro="Work with Stark in your favorite browser" 
              h1Text="Stark for Chrome"
              pText="Make every project accessible from the start. Stark for Chrome keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
            />
          }/>
          <Route path="/edge" element={
            <Header
              pIntro="Work with Stark in your favorite browser" 
              h1Text="Stark for Edge"
              pText="Make every project accessible from the start. Stark for Edge keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
            />
          }/>
          <Route path="/safari" element={
            <Header
              pIntro="Work with Stark in your favorite browser" 
              h1Text="Stark for Safari"
              pText="Make every project accessible from the start. Stark for Safari keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
            />
          }/>
          <Route path="/arc" element={
            <Header
              pIntro="Work with Stark in your favorite browser" 
              h1Text="Stark for Arc"
              pText="Make every project accessible from the start. Stark for Arc keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record tim"
            />
          }/>
          <Route path="/brave" element={
            <Header 
              pIntro="Work with Stark in your favorite browser"
              h1Text="Stark for Brave"
              pText="Make every project accessible from the start. Stark for Brave keeps you focused on the parts of a project that need an accessibility audit. With powerful tools, automated checks, and smart suggestions you can supercharge your accessibility workflow at scale and in record time."
            />
          }/>
        </Routes>
      </header>
      <Routes>
        <Route path="/" element={<p>1</p>}/>
        <Route path="/2" element={<p>2</p>}/>
        <Route path="/3" element={<p>3</p>}/>
        <Route path="/4" element={<p>4</p>}/>
        <Route path="/5" element={<p>5</p>}/>
      </Routes>
      <main>
        <Video/>
        <Customers/>
        <Download/>
        <Features/>
        <CallToAction/>
        <Testimonials/>
        <GetStarted/>
        <Features2/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;