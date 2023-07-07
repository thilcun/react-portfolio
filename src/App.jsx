import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { Header } from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="main-grid">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
