
import React from 'react';
import CuadroChat from "./components/chatbox/CuadroChatComponent.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/SignInComponent.jsx"
import BarraNavegacion from './components/navegacion/BarraNavegacionComponent.jsx';

function App() {
  return (
    <BrowserRouter>
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<ThemeProvider />} />
        <Route path="/chat" element={<CuadroChat />} />
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
      
      
      
    </BrowserRouter>
  );

}

export default App;
