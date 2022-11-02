import "./style/general.css";
import Header from "./components/Header";
import Video from "./components/Video";
import Customers from "./components/Customers";

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Video/>
        <Customers/>
      </main>
    </div>
  )
}

export default App;