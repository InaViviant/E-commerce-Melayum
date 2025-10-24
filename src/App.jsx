import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
        <footer className="bg-dark text-white py-4 mt-5">
          <div className="container text-center">
            <p className="mb-0">&copy; 2024 MELAYUM. Todos los derechos reservados.</p>
          </div>
        </footer>
      </Router>
    </CartProvider>
  );
}

export default App;
