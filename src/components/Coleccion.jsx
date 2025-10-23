function Coleccion() {
  const productos = [
    {
      id: 1,
      nombre: "Vestido Noir Elegance",
      descripcion: "Vestido de noche en seda negra con detalles bordados",
      precio: "$299"
    },
    {
      id: 2,
      nombre: "Conjunto Pearl",
      descripcion: "Blazer y pantalón en lino color perla, corte clásico",
      precio: "$450"
    },
    {
      id: 3,
      nombre: "Blusa Bohème",
      descripcion: "Blusa de seda con lazada al cuello, estampado floral",
      precio: "$180"
    },
    {
      id: 4,
      nombre: "Abrigo Camel",
      descripcion: "Abrigo largo de lana merino, diseño atemporal",
      precio: "$620"
    },
    {
      id: 5,
      nombre: "Falda Midi Satin",
      descripcion: "Falda satinada plisada, caída fluida y elegante",
      precio: "$210"
    },
    {
      id: 6,
      nombre: "Vestido Cóctel Rose",
      descripcion: "Vestido midi en tono rosa empolvado con escote bardot",
      precio: "$340"
    }
  ];

  return (
    <section id="coleccion" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">Nuestra Colección</h2>
          <p className="lead text-muted">Piezas exclusivas para mujeres elegantes</p>
        </div>
        <div className="row g-4">
          {productos.map((producto) => (
            <div key={producto.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="bg-light" style={{ height: '350px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <i className="bi bi-image text-secondary" style={{ fontSize: '60px' }}></i>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{producto.nombre}</h5>
                  <p className="card-text text-muted">{producto.descripcion}</p>
                  <p className="h4 text-dark mb-0">{producto.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coleccion;
