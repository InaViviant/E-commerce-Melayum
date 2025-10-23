import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <div style={{ height: '600px', background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}>
            <img
              className="d-block w-100 h-100"
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Colección de moda 1"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Elegancia Atemporal</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ height: '600px', background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}>
            <img
              className="d-block w-100 h-100"
              src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Colección de moda 2"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Estilo Contemporáneo</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ height: '600px', background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}>
            <img
              className="d-block w-100 h-100"
              src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Colección de moda 3"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Sofisticación Moderna</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ height: '600px', background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}>
            <img
              className="d-block w-100 h-100"
              src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Colección de moda 4"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Tendencias Exclusivas</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ height: '600px', background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}>
            <img
              className="d-block w-100 h-100"
              src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Colección de moda 5"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Carousel.Caption>
            <h3 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Diseño Único</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5 py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '1px' }}>Quiénes Somos</h1>
            <div style={{ height: '3px', width: '80px', background: '#000', marginBottom: '30px' }}></div>
            <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.8' }}>
              <strong>MELAYUM</strong> es más que una marca de moda, es una declaración de estilo y sofisticación.
              Fundada con la visión de redefinir la elegancia femenina contemporánea, nos especializamos en crear
              piezas únicas que combinan diseño vanguardista con artesanía excepcional.
            </p>
            <p className="fs-5 text-muted" style={{ lineHeight: '1.8' }}>
              Cada colección es cuidadosamente curada para reflejar las últimas tendencias internacionales,
              adaptadas al estilo distintivo de la mujer moderna que busca destacar con autenticidad y confianza.
              Nuestra filosofía se basa en la calidad superior, la atención al detalle y la exclusividad.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Melayum Fashion"
              className="img-fluid rounded shadow-lg"
              style={{ objectFit: 'cover', height: '500px', width: '100%' }}
            />
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-5">
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4 mb-md-0">
              <i className="bi bi-truck fs-1 mb-3"></i>
              <h4 className="fw-bold">Envío Gratis</h4>
              <p className="text-muted">En compras superiores a $50</p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <i className="bi bi-shield-check fs-1 mb-3"></i>
              <h4 className="fw-bold">Compra Segura</h4>
              <p className="text-muted">Protección garantizada</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-arrow-repeat fs-1 mb-3"></i>
              <h4 className="fw-bold">Devoluciones</h4>
              <p className="text-muted">30 días para cambios</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

