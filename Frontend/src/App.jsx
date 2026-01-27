import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WhatsAppButton from "./main/component/WhatsAppButton";
import LandinPage from "./main/pages/LandinPage";
import New from "./main/pages/New";

function App() {
  return (
    <>
      <WhatsAppButton />
      <Router>
        <Routes>
          <Route path="/" element={<LandinPage />} />
          <Route path="/main" element={<New />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
