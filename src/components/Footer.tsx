const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Peintre. Tous droits réservés.</p>
      <div className="footer__social">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
