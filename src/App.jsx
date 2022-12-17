import "./style/general.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Mac from "./pages/Mac";
import Figma from "./pages/Figma";
import Sketch from "./pages/Sketch";
import Adobe from "./pages/Adobe";
import Chrome from "./pages/Chrome";
import Edge from "./pages/Edge";
import Safari from "./pages/Safari";
import Arc from "./pages/Arc";
import Brave from "./pages/Brave";
import Error from "./pages/Error/Error";
import SketchDownload from "./pages/SketchDownload/SketchDownload";

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
          {/* <Route path="/sketch" element={
            <Sketch/>
          }/> */}
          <Route path="/sketch">
            <Route index element={
              <Sketch/>
            }/>
            <Route path="download" element={
              <SketchDownload/>
            }/>
          </Route>
          <Route path="/adobe-xd" element={
            <Adobe/>
          }/>
          <Route path="/chrome" element={
            <Chrome/>
          }/>
          <Route path="/edge" element={
            <Edge/>
          }/>
          <Route path="/safari" element={
            <Safari/>
          }/>
          <Route path="/arc" element={
            <Arc/>
          }/>
          <Route path="/brave" element={
            <Brave/>
          }/>
          <Route path="*" element={
            <Error/>
          }/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App;