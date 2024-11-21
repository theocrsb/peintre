import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-body-secondary text-center text-lg-start">
      <div className="text-center p-3">
        <p>© {new Date().getFullYear()} HAJAR DECORS. Tous droits réservés.</p>
        <a
          className="text-body"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
