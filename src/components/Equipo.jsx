function Equipo() {
  const trabajadores = [
    {
      id: 1,
      nombre: "Isabella Martínez",
      cargo: "Directora Creativa",
      descripcion: "15 años de experiencia en diseño de moda de alta gama"
    },
    {
      id: 2,
      nombre: "Sofía Ramírez",
      cargo: "Diseñadora Principal",
      descripcion: "Especialista en tendencias y patrones contemporáneos"
    },
    {
      id: 3,
      nombre: "Carmen López",
      cargo: "Jefa de Producción",
      descripcion: "Experta en control de calidad y procesos textiles"
    },
    {
      id: 4,
      nombre: "Laura Fernández",
      cargo: "Estilista Senior",
      descripcion: "Asesora de imagen y coordinadora de colecciones"
    },
    {
      id: 5,
      nombre: "Valentina Torres",
      cargo: "Gerente de Ventas",
      descripcion: "Relaciones con clientes y desarrollo de marca"
    },
    {
      id: 6,
      nombre: "Andrea Ruiz",
      cargo: "Coordinadora de Marketing",
      descripcion: "Estrategias digitales y comunicación de marca"
    }
  ];

  return (
    <section id="equipo" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">Nuestro Equipo</h2>
          <p className="lead text-muted">Las personas que hacen posible Melayum</p>
        </div>
        <div className="row g-4">
          {trabajadores.map((trabajador) => (
            <div key={trabajador.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body py-4">
                  <div className="rounded-circle bg-secondary mx-auto mb-3 d-flex align-items-center justify-content-center"
                       style={{ width: '120px', height: '120px' }}>
                    <i className="bi bi-person text-white" style={{ fontSize: '60px' }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-1">{trabajador.nombre}</h5>
                  <p className="text-muted fw-semibold mb-3">{trabajador.cargo}</p>
                  <p className="card-text small">{trabajador.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipo;
