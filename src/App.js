
import React from 'react';
import CuadroChat from "./components/CuadroChatComponent.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/SignIn.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CuadroChat />} />
      </Routes>
      <Routes>
        <Route path="/1" element={<ThemeProvider />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
