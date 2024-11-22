import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import Peintre from "./pages/Peintre";
import Plaquiste from "./pages/Plaquiste";
import Menuisier from "./pages/Menuisier";
import Carreleur from "./pages/Carreleur";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/peintre" element={<Peintre />} />
          <Route path="/plaquiste" element={<Plaquiste />} />
          <Route path="/menuisier" element={<Menuisier />} />
          <Route path="/carreleur" element={<Carreleur />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
