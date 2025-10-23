import { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">Contacto</h2>
          <p className="lead text-muted">Estamos aquí para ayudarte</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="mb-4">
              <h4 className="fw-bold mb-3">Información de Contacto</h4>
              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-geo-alt-fill text-dark fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Dirección</h6>
                  <p className="text-muted mb-0">Calle Elegancia 123, Centro<br/>Madrid, España 28001</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-telephone-fill text-dark fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Teléfono</h6>
                  <p className="text-muted mb-0">+34 912 345 678</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-envelope-fill text-dark fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted mb-0">info@melayum.com</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-clock-fill text-dark fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Horario</h6>
                  <p className="text-muted mb-0">Lunes a Viernes: 10:00 - 20:00<br/>Sábados: 11:00 - 19:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Envíanos un mensaje</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      name="mensaje"
                      rows="4"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark w-100 py-2">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
