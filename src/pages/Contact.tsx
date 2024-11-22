import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <main className="container" style={{ minHeight: "calc(100vh - 13vh)" }}>
        <h1 className="text-center mb-4">Contactez-moi</h1>
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded bg-white shadow">
              <p className="mb-2">
                <a
                  href="mailto:hajardecors1@gmail.com"
                  className="text-decoration-none"
                >
                  hajardecors1@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <a href="tel:+33620993533" className="text-decoration-none">
                  06 20 99 35 33
                </a>
              </p>
              <span className="d-block mb-2">8h - 18h</span>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded bg-white shadow">
              <span className="d-block mb-2">5 rue de Lesseps 75020 Paris</span>
              <span className="d-block mb-2">Paris et alentours</span>
              <span className="d-block mb-2">France</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
