import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import { AppRoutes } from './Routes/AppRoutes';
import { Footer } from './Components/Footer/Footer';


function App() {
  const [menu,setMenu] = useState("inici");
  const handleMenuSelect = (menuItem) => {
    setMenu(menuItem);
  }; 
  return (
    <div>
      <BrowserRouter>
        <Navbar menu={menu} setMenu={handleMenuSelect} />
        <AppRoutes />
        <Footer setMenu={handleMenuSelect}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
