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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="contact">
      <h1>Contactez-nous</h1>
      <div className="contact-info">
        <p>
          Téléphone : <a href="tel:+123456789">+1 234 567 89</a>
        </p>
        <p>
          Email : <a href="mailto:contact@peintre.com">contact@peintre.com</a>
        </p>
        <p>Adresse : 123 Rue Exemple, Ville, Pays</p>
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
        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
};

export default Contact;
