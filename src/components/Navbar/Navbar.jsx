import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink
            to="/performances"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Performances
          </NavLink>
        </li>
        <li>
          Banda
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;