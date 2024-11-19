import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = event.target.value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" loading="lazy" />
        <Link style={{ paddingLeft: "32px" }} to="/">
          HAJAR DECORS
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/galerie">Galerie</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="custom-select">
          <select onChange={handleSelectChange}>
            <option value="">Services</option>
            <option value="/peintre">Peintre</option>
            <option value="/plaquiste">Plaquiste</option>
            <option value="/menuisier">Menuisier</option>
            <option value="/carreleur">Carreleur</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
