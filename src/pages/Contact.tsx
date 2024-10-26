import Footer from "../components/Footer";
import "./Contact.css";
import { ChangeEvent, FormEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // TODO: use real mail address and delete yopmail adress
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:hajardecors1@gmail.com"?subject=Message de ${
      formData.nom
    }&body=Nom: ${formData.nom}%0AEmail: ${
      formData.email
    }%0AMessage: ${encodeURIComponent(formData.message)}`;

    window.location.href = mailtoLink;
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nom :
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email :
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message :
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button className="contact-button" type="submit">
            Envoyer
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
