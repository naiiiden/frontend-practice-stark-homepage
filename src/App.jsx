import "./style/general.css";
import Header from "./components/Header";
import Video from "./components/Video";
import Customers from "./components/Customers";
import Download from "./components/Download";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";
import Features2 from "./components/Features2";

const App = () => {
  return (
    <div>
      <Header/>
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
    </div>
  )
}

export default App;