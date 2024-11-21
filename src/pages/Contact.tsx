import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <main className="contact">
        <h1>Contactez-moi</h1>
        <div className="contact-info contact-wrapper">
          <div className="contact-one">
            <p>
              <a href="mailto:hajardecors1@gmail.com">hajardecors1@gmail.com</a>
            </p>
            <p>
              <a href="tel:+33620993533">06 20 99 35 33</a>
            </p>
            <span>8h - 18h</span>
          </div>
          <div className="contact-two">
            <span>5 rue de Lesseps 75020 Paris</span>
            <br />
            <span>Paris et alentours</span>
            <br />
            <span>France</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
