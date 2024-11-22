const Footer = () => {
  return (
    <footer
      className="bg-body-secondary text-center"
      style={{ height: "13vh" }}
    >
      <div className="text-center p-3">
        <p>© {new Date().getFullYear()} HAJAR DECORS. Tous droits réservés.</p>
        <a
          className="text-body mx-2"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com mx-2"
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
