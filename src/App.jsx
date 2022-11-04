import "./style/general.css";
import Header from "./components/Header";
import Video from "./components/Video";
import Customers from "./components/Customers";
import Download from "./components/Download";
import Features from "./components/Features";

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Video/>
        <Customers/>
        <Download/>
        <Features/>
      </main>
    </div>
  )
}

export default App;