import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";
import Footer from "./components/footer/Footer"
import ScrollToTop from "./components/scrollToTop/ScrollToTop"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shows" element={<NetFlixShow/>}></Route>
      
      </Routes>
    
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
