import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-body-secondary text-center"
      style={{ height: "13vh" }}
    >
      <div className="text-center p-3">
        <p>© {new Date().getFullYear()} HAJAR DECORS. Tous droits réservés.</p>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
