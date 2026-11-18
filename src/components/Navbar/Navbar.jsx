import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Início
          </NavLink>
        </li>
         <li>
          <NavLink
            to="/bio"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Bio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/audios"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Audios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/galeria"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Galeria
          </NavLink>
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

      </ul>
    </nav>
  );
}

export default Navbar;