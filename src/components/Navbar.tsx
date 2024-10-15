import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Nom du Peintre</div>
      <ul className="navbar__links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/galerie">Galerie</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
