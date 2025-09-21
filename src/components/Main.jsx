import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Main = () => {
    const mensaje = () => {
        console.log("Explorando = Melayum");
    };

    return (
        <main className="py-5 bg-light">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h2>Melayum</h2>
                        <p>
                            Melayum es un proyecto de e-commerce desarrollado con React, utilizando Bootstrap para un diseño moderno y responsivo que se adapta a cualquier dispositivo. Integra APIs para la gestión dinámica de productos y datos, ofreciendo una experiencia fluida, rápida y escalable, pensada como base para una tienda online completa.
                        </p>
                        <Button variant="primary" onClick={mensaje}>Ver más</Button>
                    </Col>
                    <Col md={6}>
                        <img
                            src="https://picsum.photos/600/400"
                            className="img-fluid rounded shadow" 
                            alt="Imagen de Melayum"
                        />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Main;