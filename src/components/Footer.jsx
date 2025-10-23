function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold mb-2">Melayum</h5>
            <p className="mb-0 small text-muted">Elegancia que inspira desde 2015</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="mb-2">
              <a href="#" className="text-white text-decoration-none me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
            <p className="mb-0 small text-muted">&copy; 2025 Melayum. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
