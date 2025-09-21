import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import '../styles/Contacto.css';

const Contacto = () => {
    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-4">Contacto</h2>
                <Row>
                    <Col md={6} className="mx-auto">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Tu nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="tu@email.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Enviar Mensaje
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contacto;