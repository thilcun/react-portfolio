import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => (
  <nav className="navbar">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img style={{ width: 100, height: 30 }} src="" alt="TLC"></img>
      </Link>
    </div>
  </nav>
);
