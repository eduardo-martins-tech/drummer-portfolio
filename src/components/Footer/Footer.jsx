import "./Footer.css";
import drummer from "../../assets/images/footer-drums.png";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-divider"></div>

      <div className="footer-image">
        <img
          src={drummer}
          alt="Eduardo Martins"
        />
      </div>

      <div className="footer-content">

        <h2>Obrigado pela visita.</h2>

        <div className="footer-socials">

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <MdEmail />
          </a>

          <a href="#">
            <FaWhatsapp />
          </a>

        </div>

        <button
          className="footer-button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑ Voltar ao topo
        </button>

      </div>

      <div className="footer-copy">

        <p>© 2026 Eduardo Martins</p>

        <span>
          Todos os direitos reservados.
        </span>

      </div>

    </footer>
  );
}

export default Footer;