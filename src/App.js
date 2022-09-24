import React from 'react';
import CuadroChat from "./components/CuadroChatComponent.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CuadroChat />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
