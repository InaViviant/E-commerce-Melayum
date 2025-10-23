import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Iñaki Viviánt',
      role: 'Director Creativo',
      image: ' https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Visionario con 15 años de experiencia en alta costura'
    },
    {
      id: 2,
      name: 'Melany Rodríguez',
      role: 'Diseñadora Principal',
      image: 'https://images.pexels.com/photos/17243575/pexels-photo-17243575.jpeg',
      description: 'Especialista en tendencias y diseño contemporáneo'
    },
    {
      id: 3,
      name: 'Valentina García',
      role: 'Directora de Estilo',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experta en styling y dirección de imagen'
    },
    {
      id: 4,
      name: 'Camila Torres',
      role: 'Gerente de Producción',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Garantiza la calidad en cada pieza'
    },
    {
      id: 5,
      name: 'Ezequiel Fernández',
      role: 'Jefe de Atelier',
      image: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Maestro en técnicas artesanales de confección'
    },
    {
      id: 6,
      name: 'Emma López',
      role: 'Directora de Marketing',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Conecta nuestra marca con el mundo'
    }
  ];

  return (
    <div className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '1px' }}>Nuestro Equipo</h1>
          <div style={{ height: '3px', width: '80px', background: '#000', margin: '0 auto 20px' }}></div>
          <p className="text-muted fs-5">Las mentes creativas detrás de MELAYUM</p>
        </div>

        <Row>
          {teamMembers.map((member) => (
            <Col key={member.id} md={6} lg={4} className="mb-4">
              <Card className="border-0 shadow-sm h-100" style={{ transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ height: '400px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={member.image}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="text-center bg-white">
                  <Card.Title className="fw-bold fs-4 mb-2">{member.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted fw-normal">{member.role}</Card.Subtitle>
                  <Card.Text className="text-muted">{member.description}</Card.Text>
                  <div className="mt-3">
                    <a href="#" className="text-dark me-3"><i className="bi bi-instagram fs-5"></i></a>
                    <a href="#" className="text-dark me-3"><i className="bi bi-linkedin fs-5"></i></a>
                    <a href="#" className="text-dark"><i className="bi bi-twitter fs-5"></i></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Team;
