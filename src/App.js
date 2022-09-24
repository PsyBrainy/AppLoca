import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CuadroChatComponent from "./components/CuadroChatComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CuadroChatComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
