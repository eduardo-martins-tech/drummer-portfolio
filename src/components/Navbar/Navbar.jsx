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
          <NavLink
            to="/Audios"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Audios
          </NavLink>
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