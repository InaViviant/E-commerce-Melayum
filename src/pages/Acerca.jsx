import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import '../styles/Acerca.css';

const Acerca = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <Col md={8} className="mx-auto">
                        <h2 className="text-center mb-4">Acerca de Melayum</h2>
                        <p className="lead text-center">
                            Melayum es una marca de alta costura dedicada a crear piezas únicas 
                            para mujeres que valoran la elegancia y la exclusividad.
                        </p>
                        <p>
                            Fundada con la visión de combinar tradición artesanal con diseño contemporáneo, 
                            cada pieza de Melayum cuenta una historia de pasión por la moda de lujo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Acerca;