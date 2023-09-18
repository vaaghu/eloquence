import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorkerRegistration from "@utils/serviceWorkerRegistration";

import NavBar from "@components/navBar";
import HomeComp from "@pages/home";
// import AboutComp from "@pages/about";
import MapComp from "@pages/map";
import EventComp from "@pages/event";
import FirstComp from "@pages/first";

import styles from "@styles/index.module.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<IndexComp />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

function IndexComp() {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <Routes>
        {/* <Route path="*" element={<ErrorComp />} /> */}
        <Route path="/" element={<FirstComp navigate={navigate} />} />
        <Route path="/home" element={<HomeComp navigate={navigate} />} />
        <Route path="/location" element={<MapComp navigate={navigate} />} />
        {/* <Route path="/about" element={<AboutComp navigate={navigate} />} /> */}
        <Route path="/event" element={<EventComp navigate={navigate} />} />
      </Routes>
      <NavBar navigate={navigate} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);

serviceWorkerRegistration.register();
