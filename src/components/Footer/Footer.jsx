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

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/eduardomartinsdf290"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/dududrumer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <FaFacebookF />
          </a>

          {/* E-MAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dudu.supernovavida@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar e-mail"
            title="Enviar e-mail"
          >
            <MdEmail />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5561998161540"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
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