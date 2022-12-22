import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@pages/Home";
import Images from "@pages/Images";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
