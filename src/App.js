// import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import {Button} from 'react-bootstrap';
import Navbar from './components/Header/Navbar';
import Carrusel from './components/Body/Carrusel';
import Opago from './components/Body/Opago';
import Tarjeta from './components/Body/Tarjeta';
// import Login from './components/Login.js';
// import Dashboard from './components/Dashboard.js';
// import Navbar1 from './components/Navbar1.js';
// import Register from './components/Register.js';



function App() {
  
  return (
    <div className="App">

      <header className="App-header">

        <Navbar/>
        <Carrusel/>
        <Opago/>
        <Tarjeta/>
        
        {/* <BrowserRouter>
      <Routes>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/dashboard">
          <Navbar1/>
          <Dashboard/>
        </Route>
      </Routes>
    </BrowserRouter>
        */}

      </header> 
    </div>
  );
}
  
export default App;
