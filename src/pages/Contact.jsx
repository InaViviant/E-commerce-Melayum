import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-5">
      {submitted && (
        <div
          className="position-fixed top-0 start-50 translate-middle-x mt-5 alert alert-success shadow-lg"
          style={{ zIndex: 9999, minWidth: '300px' }}
          role="alert"
        >
          ¡Mensaje enviado con éxito! Te contactaremos pronto.
        </div>
      )}

      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '1px' }}>Contáctanos</h1>
          <div style={{ height: '3px', width: '80px', background: '#000', margin: '0 auto 20px' }}></div>
          <p className="text-muted fs-5">Estamos aquí para ayudarte</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Row className="mb-5">
              <Col md={4} className="text-center mb-4 mb-md-0">
                <i className="bi bi-geo-alt fs-1 mb-3 d-block"></i>
                <h5 className="fw-bold">Dirección</h5>
                <p className="text-muted">Av. Fashion 123<br />Madrid, España</p>
              </Col>
              <Col md={4} className="text-center mb-4 mb-md-0">
                <i className="bi bi-telephone fs-1 mb-3 d-block"></i>
                <h5 className="fw-bold">Teléfono</h5>
                <p className="text-muted">+34 912 345 678<br />Lun - Vie: 9am - 6pm</p>
              </Col>
              <Col md={4} className="text-center">
                <i className="bi bi-envelope fs-1 mb-3 d-block"></i>
                <h5 className="fw-bold">Email</h5>
                <p className="text-muted">info@melayum.com<br />ventas@melayum.com</p>
              </Col>
            </Row>

            <div className="bg-white p-5 shadow-sm rounded">
              <h3 className="fw-bold mb-4">Envíanos un mensaje</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '0', padding: '12px' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '0', padding: '12px' }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ borderRadius: '0', padding: '12px' }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '0', padding: '12px' }}
                  />
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  className="w-100"
                  style={{ borderRadius: '0', padding: '12px', fontSize: '16px' }}
                >
                  Enviar Mensaje
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
