import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

const Products = () => {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const fashionCategories = ["women's clothing", "men's clothing", "jewelery"];
        const fashionProducts = data.filter(product =>
          fashionCategories.includes(product.category)
        );

        const womensClothing = fashionProducts.filter(p => p.category === "women's clothing");

        const additionalWomensProducts = [
          {
            id: 100,
            name: "Vestido Elegante de Noche",
            price: 129.99,
            image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Vestido largo elegante perfecto para eventos especiales y ocasiones formales"
          },
          {
            id: 101,
            name: "Blusa de Seda Premium",
            price: 85.00,
            image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Blusa de seda 100% con diseño sofisticado y acabados de lujo"
          },
          {
            id: 102,
            name: "Pantalón Palazzo Elegante",
            price: 95.50,
            image: "https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Pantalón palazzo de corte amplio y elegante, ideal para look formal"
          },
          {
            id: 103,
            name: "Falda Midi Plisada",
            price: 78.00,
            image: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Falda midi con plisado elegante, perfecta para oficina o eventos"
          },
          {
            id: 104,
            name: "Vestido Floral Primavera",
            price: 115.00,
            image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Vestido con estampado floral exclusivo, diseño fresco y moderno"
          },
          {
            id: 105,
            name: "Blazer Estructurado",
            price: 145.00,
            image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Blazer con estructura perfecta, ideal para look profesional elegante"
          },
          {
            id: 106,
            name: "Conjunto de Lino Verano",
            price: 135.00,
            image: "https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Conjunto de lino premium, fresco y cómodo para días calurosos"
          },
          {
            id: 107,
            name: "Vestido Cóctel Negro",
            price: 155.00,
            image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Vestido cóctel sofisticado, perfecto para eventos nocturnos"
          }
        ];

        const formattedProducts = fashionProducts.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
          description: item.description,
          category: item.category
        }));

        const allProducts = [...formattedProducts, ...additionalWomensProducts];

        const sortedProducts = allProducts.sort((a, b) => {
          if (a.category === "women's clothing" && b.category !== "women's clothing") return -1;
          if (a.category !== "women's clothing" && b.category === "women's clothing") return 1;
          return 0;
        });

        setProducts(sortedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <p className="mt-3 text-muted">Cargando productos...</p>
          </div>
        ) : (
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
        )}
      </Container>
    </div>
  );
};

export default Products;
