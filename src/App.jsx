import "./style/general.css";
import Header from "./components/Header";
import Video from "./components/Video";
import Customers from "./components/Customers";

const App = () => {
  return (
    <div>
      <Header/>
      <Video/>
      <Customers/>
    </div>
  )
}

export default App;