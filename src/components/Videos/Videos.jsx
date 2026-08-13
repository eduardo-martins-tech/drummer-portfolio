import "./Videos.css";
import { Link } from "react-router-dom";

function Videos() {
  return (
    <section className="videos-section">

      <div className="videos-link-wrapper">
        <Link to="/performances" className="videos-link">
          Explore mais performances →
        </Link>
      </div>

      <div className="videos-grid">

        <article className="video-item">

          <h3 className="video-title">
            DEBAIXO DO MEU PÉ
          </h3>

          <p className="video-description">
            Registro exclusivo da gravação ao vivo da música
            <strong> "Debaixo do Meu Pé"</strong>,
            reunindo bastidores e momentos da performance da banda
            Supernovavida.
          </p>

          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/08Xyu8lZVs4"
              title="Debaixo do Meu Pé"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </article>

        <article className="video-item">

          <h3 className="video-title">
            NÃO PARA NÃO
          </h3>

          <p className="video-description">
            Clipe oficial da música
            <strong> "Não Para Não"</strong>,
            da banda Supernovavida, com participação de
            Eduardo Martins na bateria.
          </p>

          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/ayRftryJlig"
              title="Não Para Não"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </article>

      </div>

    </section>
  );
}

export default Videos;