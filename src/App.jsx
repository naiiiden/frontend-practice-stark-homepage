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
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Header test="1"/>}/>
          <Route path="/2" element={<Header test="2"/>}/>
          <Route path="/3" element={<Header test="3"/>}/>
          <Route path="/4" element={<Header test="4"/>}/>
          <Route path="/5" element={<Header test="5"/>}/>
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