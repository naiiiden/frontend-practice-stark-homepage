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
              h1Text="Supercharge Accessibility" 
              bgColor="red" 
              bgURL="none"
            />
          }/>
          <Route path="/mac" element={
            <Header 
              h1Text="Introducing Stark for Mac" 
              bgColor="pink"
            />
          }/>
          <Route path="/figma" element={
            <Header 
              h1Text="Stark for Figma" 
              bgColor="green"
            />
          }/>
          <Route path="/sketch" element={
            <Header 
              h1Text="Stark for Sketch"
            />
          }/>
          <Route path="/adobe-xd" element={
            <Header 
              h1Text="Stark for Adobe XD"
            />
          }/>
          <Route path="/chrome" element={
            <Header 
              h1Text="Stark for Chrome"
            />
          }/>
          <Route path="/edge" element={
            <Header 
              h1Text="Stark for Edge"
            />
          }/>
          <Route path="/safari" element={
            <Header 
              h1Text="Stark for Safari"
            />
          }/>
          <Route path="/arc" element={
            <Header 
              h1Text="Stark for Arc"
            />
          }/>
          <Route path="/brave" element={
            <Header 
              h1Text="Stark for Brave"
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