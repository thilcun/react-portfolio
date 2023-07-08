import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { Header } from "./components/header/header";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="main-grid">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <footer>
        <div className="footer-menu">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
