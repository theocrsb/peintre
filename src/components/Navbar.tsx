import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="shadow navbar navbar-expand-lg bg-body-secondary"
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            style={{ height: "40px", marginRight: "8px" }}
          />
          HAJAR DECORS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/galerie">
                Galerie
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link className="dropdown-item blabla" to="/peintre">
                    Peintre
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/plaquiste">
                    Plaquiste
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/menuisier">
                    Menuisier
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/carreleur">
                    Carreleur
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
