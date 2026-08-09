import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1></h1>

      <ul>
        <li>
            <Link to="/">Início</Link>
        </li>
        <li>
            História
        </li>
        <li>
            Áudios
        </li>
        <li>
            Galeria
        </li>
        <li>
            <Link to="/performances">Performances</Link>
        </li>
        <li>
            Banda
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;