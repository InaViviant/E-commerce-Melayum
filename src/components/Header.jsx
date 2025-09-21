import React from "react";
import {Container} from "react-bootstrap";
//import '../styles/Header.css';

const Header = () => {
    return (
        <header className="bg-primary text-white py-4 shadow-sm">
            <Container>
                <h1 className="mb-1">Proyecto Talento Tech</h1>
                    <p className="lead">Componentes React Friendly</p>
            </Container>
        </header>
    );

}

export default Header;