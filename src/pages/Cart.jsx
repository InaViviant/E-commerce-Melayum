import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [showPurchaseMessage, setShowPurchaseMessage] = useState(false);

  const handlePurchase = () => {
    setShowPurchaseMessage(true);
    clearCart();
    setTimeout(() => {
      setShowPurchaseMessage(false);
    }, 3000);
  };

  return (
    <div className="py-5" style={{ minHeight: '80vh', backgroundColor: '#f8f9fa' }}>
      {showPurchaseMessage && (
        <div
          className="position-fixed top-50 start-50 translate-middle alert alert-success shadow-lg text-center"
          style={{ zIndex: 9999, minWidth: '400px', padding: '30px' }}
          role="alert"
        >
          <i className="bi bi-check-circle fs-1 d-block mb-3 text-success"></i>
          <h4 className="fw-bold">¡Compra realizada con éxito!</h4>
          <p className="mb-0">Gracias por tu compra en MELAYUM</p>
        </div>
      )}

      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '1px' }}>Carrito de Compras</h1>
          <div style={{ height: '3px', width: '80px', background: '#000', margin: '0 auto' }}></div>
        </div>

        {cartItems.length === 0 ? (
          <Row className="justify-content-center">
            <Col lg={6} className="text-center">
              <Card className="border-0 shadow-sm p-5">
                <i className="bi bi-bag-x fs-1 mb-4 text-muted"></i>
                <h3 className="fw-bold mb-3">Tu carrito está vacío</h3>
                <p className="text-muted mb-4">Descubre nuestra colección y añade productos a tu carrito</p>
                <Button
                  variant="dark"
                  href="/productos"
                  style={{ borderRadius: '0', padding: '12px 40px' }}
                >
                  Ver Productos
                </Button>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col lg={8} className="mb-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="mb-3 border-0 shadow-sm">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col md={3}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                        />
                      </Col>
                      <Col md={4}>
                        <h5 className="fw-bold mb-2">{item.name}</h5>
                        <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                      </Col>
                      <Col md={3}>
                        <div className="d-flex align-items-center justify-content-center">
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{ borderRadius: '0', width: '35px' }}
                          >
                            -
                          </Button>
                          <span className="mx-3 fw-bold">{item.quantity}</span>
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{ borderRadius: '0', width: '35px' }}
                          >
                            +
                          </Button>
                        </div>
                      </Col>
                      <Col md={2} className="text-end">
                        <Button
                          variant="link"
                          className="text-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="bi bi-trash fs-5"></i>
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Col>

            <Col lg={4}>
              <Card className="border-0 shadow-sm sticky-top" style={{ top: '100px' }}>
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">Resumen del Pedido</h4>
                  <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className="d-flex justify-content-between px-0 border-0">
                      <span>Subtotal:</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between px-0 border-0">
                      <span>Envío:</span>
                      <span>Gratis</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between px-0 border-top pt-3">
                      <strong>Total:</strong>
                      <strong className="fs-4">${getTotalPrice().toFixed(2)}</strong>
                    </ListGroup.Item>
                  </ListGroup>
                  <Button
                    variant="dark"
                    className="w-100 mb-3"
                    onClick={handlePurchase}
                    style={{ borderRadius: '0', padding: '15px', fontSize: '16px' }}
                  >
                    Comprar Ahora
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="w-100"
                    href="/productos"
                    style={{ borderRadius: '0', padding: '15px' }}
                  >
                    Seguir Comprando
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Cart;
