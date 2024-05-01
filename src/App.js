// App.js

import React, { useState } from 'react';
import NavBar from './navbar';
import Articoli from './articoli';

function App() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
  };

  return (
    <div className="App">
      <NavBar handleMenuClick={handleMenuClick} />
      {selectedMenu === 'Articoli' && <Articoli />}
    </div>
  );
}

export default App;
