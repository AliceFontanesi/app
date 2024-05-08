// HomePage.js

import React from 'react';
import NavBar from './navbar';
import Articoli from './articoli';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Articoli />
      {/* Altri contenuti della home page */}
    </div>
  );
};

export default App;
