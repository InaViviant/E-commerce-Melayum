import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const { getTotalItems } = useCart();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3" style={{ letterSpacing: '2px' }}>
          MELAYUM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="mx-2">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos" className="mx-2">Productos</Nav.Link>
            <Nav.Link as={Link} to="/equipo" className="mx-2">Equipo</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="mx-2">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/login" className="mx-2">
              <i className="bi bi-person fs-4"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/carrito" className="mx-2 position-relative">
              <i className="bi bi-bag fs-4"></i>
              {getTotalItems() > 0 && (
                <Badge
                  bg="dark"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.7rem' }}
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
