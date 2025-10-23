import Navbar from './components/Navbar.jsx';
import Inicio from './components/Inicio.jsx';
import Coleccion from './components/Coleccion.jsx';
import Equipo from './components/Equipo.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Coleccion />
      <Equipo />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
