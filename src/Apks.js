import React from "react";
import ReactDOM from "react-dom/client";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import Restaurants from "./components/Restaurants";
import Grocery from "./components/Grocery";
import DineOut from "./components/DineOut";
import Vege from "./Vege";


function Apks() {
  return (
    <BrowserRouter>
      <ScrollToTop />
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/restaurants" element={<Restaurants />} />

  <Route path="/grocery" element={<Grocery />} />
  <Route path="/grocery/vege" element={<Vege />} />

  <Route path="/dineout" element={<DineOut />} />
</Routes>
</BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<Apks />);