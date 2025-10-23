import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Products = () => {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState('');

  const products = [
    {
      id: 1,
      name: 'Vestido Elegante Negro',
      price: 89.99,
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Elegante vestido negro perfecto para cualquier ocasión especial'
    },
    {
      id: 2,
      name: 'Blusa de Seda Blanca',
      price: 65.00,
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Blusa de seda premium con diseño sofisticado'
    },
    {
      id: 3,
      name: 'Pantalón Palazzo Beige',
      price: 75.50,
      image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Pantalón palazzo de corte elegante y cómodo'
    },
    {
      id: 4,
      name: 'Blazer Estructurado Gris',
      price: 120.00,
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Blazer contemporáneo con diseño estructurado'
    },
    {
      id: 5,
      name: 'Falda Midi Plisada',
      price: 58.00,
      image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Falda midi con elegante plisado'
    },
    {
      id: 6,
      name: 'Camisa Oversize Blanca',
      price: 52.00,
      image: 'https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Camisa oversize versátil y moderna'
    },
    {
      id: 7,
      name: 'Vestido Midi Floral',
      price: 95.00,
      image: 'https://images.pexels.com/photos/1ючина926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Vestido midi con estampado floral exclusivo'
    },
    {
      id: 8,
      name: 'Trench Coat Camel',
      price: 145.00,
      image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Trench coat clásico en tono camel'
    },
    {
      id: 9,
      name: 'Conjunto de Lino',
      price: 110.00,
      image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Conjunto de lino premium para verano'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} añadido al carrito`);
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };

  return (
    <div className="py-5">
      {notification && (
        <div
          className="position-fixed top-0 start-50 translate-middle-x mt-5 alert alert-success shadow-lg"
          style={{ zIndex: 9999, minWidth: '300px' }}
          role="alert"
        >
          {notification}
        </div>
      )}

      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '1px' }}>Nuestra Colección</h1>
          <div style={{ height: '3px', width: '80px', background: '#000', margin: '0 auto 20px' }}></div>
          <p className="text-muted fs-5">Descubre las últimas tendencias en moda femenina</p>
        </div>

        <Row>
          {products.map((product) => (
            <Col key={product.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm" style={{ transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ height: '350px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold fs-5 mb-2">{product.name}</Card.Title>
                  <Card.Text className="text-muted mb-3">{product.description}</Card.Text>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fs-4 fw-bold">${product.price}</span>
                      <Button
                        variant="dark"
                        onClick={() => handleAddToCart(product)}
                        style={{ borderRadius: '0', padding: '10px 30px' }}
                      >
                        Añadir
                      </Button>
                    </div>
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

export default Products;
