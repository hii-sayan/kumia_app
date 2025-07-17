import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KumiaLanding from "./components/KumiaLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KumiaLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;