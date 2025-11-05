import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
export const Navbar = () => {
  const { items } = useCart();
  const totalItems = items.reduce(
    (acumulador, producto) => acumulador + producto.qty,
    0
  );
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
        <div className="container">
          <a className="navbar-brand fw-semibold" href="#">
            AsesoríasTech
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contacto
                </Link>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <a className="btn btn-light" href="#registrarse">
                Registrarse
              </a>
              <a className="btn btn-light" href="#login">
                Login
              </a>
              <Link
                className="text-light fs-4 position-relative"
                to="/carrito"
                aria-label="Ver Carrito de Compras"
              >
                <i className="bi bi-cart-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary cart-badge-sm">
                  {totalItems}
                  <span className="visually-hidden">
                    Productos en el carrito
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
