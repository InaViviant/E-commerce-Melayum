function Inicio() {
  return (
    <section id="inicio" className="py-5 bg-light">
      <div className="container py-5 mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-3 fw-bold mb-4">Melayum</h1>
            <h2 className="h3 text-muted mb-4">Elegancia que inspira</h2>
            <p className="lead mb-4">
              En Melayum, creemos que cada mujer merece sentirse única y poderosa.
              Desde 2015, nos dedicamos a crear piezas de moda femenina que combinan
              sofisticación, calidad y estilo contemporáneo.
            </p>
            <p className="mb-4">
              Nuestra filosofía se centra en diseñar ropa que no solo luzca bien,
              sino que también haga sentir extraordinaria a quien la usa. Cada prenda
              es cuidadosamente seleccionada y diseñada pensando en la mujer moderna:
              elegante, segura de sí misma y consciente de su estilo personal.
            </p>
            <p>
              Trabajamos con materiales de primera calidad y prestamos atención a
              cada detalle, desde el diseño hasta la confección final. En Melayum,
              la elegancia no es solo una apariencia, es una actitud.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="bg-secondary rounded" style={{ height: '500px' }}>
              <div className="d-flex align-items-center justify-content-center h-100 text-white">
                <div className="text-center">
                  <i className="bi bi-bag-heart" style={{ fontSize: '120px' }}></i>
                  <p className="mt-3 fs-4">Imagen de marca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
