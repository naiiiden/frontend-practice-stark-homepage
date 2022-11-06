import "./style/general.css";
import Header from "./components/Header";
import Video from "./components/Video";
import Customers from "./components/Customers";
import Download from "./components/Download";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

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
      </main>
    </div>
  )
}

export default App;