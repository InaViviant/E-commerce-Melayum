import { useState } from 'react'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Navigation from './components/Nav'
import Footer from './components/Footer'
import Header from './components/Header'
import Productos from './pages/Productos'
import Perfumes from './pages/Perfumes'
import AltaCostura from './pages/AltaCostura'
import Joyeria from './pages/Joyeria'
import Contacto from './pages/Contacto'
import Acerca from './pages/Acerca'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/variables.css";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/alta-costura" element={<AltaCostura />} />
          <Route path="/joyeria" element={<Joyeria />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App
