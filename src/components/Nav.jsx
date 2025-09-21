import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
//import '../styles/Nav.css';


const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Melayum </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/productos">Ropa</Nav.Link>
                        <Nav.Link as={Link} to="/alta-costura">Alta costura</Nav.Link>
                        <Nav.Link as={Link} to="/joyeria">Joyería</Nav.Link>
                        <Nav.Link as={Link} to="/perfumes">Perfumes</Nav.Link>
                        <Nav.Link as={Link} to="/acerca">Acerca de Melayum</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
}

export default Navigation;